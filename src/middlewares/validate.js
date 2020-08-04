const Joi = require('@hapi/joi');
const pick = require('../utils/pick');
const _ = require('lodash');

const validate = schema => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  console.log(validSchema);
  const object = pick(req, _.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' } })
    .validate(object);
  console.log(value);
  console.log(error);
  next();
};

module.exports = validate;
