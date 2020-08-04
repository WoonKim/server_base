const Joi = require('@hapi/joi');
const createTodo = {
  body: Joi.object().keys({
    title: Joi.string().max(255).required()
  })
};

module.exports = {
  createTodo
};
