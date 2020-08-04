const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const todoController = require('../controllers/todo.controller');
const todoValidations = require('../validations/todo.validation');
router
  .route('/')
  .get(todoController.getTodos)
  .post(validate(todoValidations.createTodo), todoController.createTodo);
router
  .route('/:id')
  .get(todoController.getTodo)
  .put(todoController.updateTodo)
  .delete(todoController.deleteTodo);
module.exports = router;
