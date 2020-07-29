const TodoServices = require("../services/todo.service");

const getTodos = async (req, res, next) => {
  let resp = await TodoServices.getTodos();
  res.json({ message: true, data: resp });
};

const createTodo = async (req, res, next) => {
  await TodoServices.createTodos(req.body.title);

  res.json({ message: true });
};

const getTodo = async (req, res, next) => {
  let resp = await TodoServices.getTodoById(req.params.id);
  res.json({ message: true, data: resp });
};

const updateTodo = async (req, res, next) => {
  let resp = await TodoServices.updateTodoById(req.params.id, req.body.title);
  res.json({ message: true, data: resp });
};

const deleteTodo = async (req, res, next) => {
  let resp = await TodoServices.deleteTodoById(req.params.id);
  res.json({ message: true, data: resp });
};

module.exports = {
  getTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
