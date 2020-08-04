const Joi = require('@hapi/joi');
const pick = require('../utils/pick');
const _ = require('lodash');
const createError = require('http-errors');

const validate = schema => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, _.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' } })
    .validate(object);

  req = _.assign(value);
  if (error) {
    const message = _.chain(error.details)
      .map(o => o.message)
      .join(', ')
      .value();
    return next(createError(400, message));
  }
  next();
};

module.exports = validate;
