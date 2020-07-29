const Todos = require("../models/Todos");
const { v4: uuidv4 } = require("uuid");
const getTodos = async () => {
  return await Todos.query();
};

const createTodos = async (title) => {
  let params = {
    id: uuidv4(),
    title: title,
  };
  await Todos.query().insert(params);
};

const getTodoById = async (id) => {
  return await Todos.query().findById(id);
};

const updateTodoById = async (id, title) => {
  return await Todos.query().update({ title: title }).where({ id: id });
};

const deleteTodoById = async (id) => {
  return await Todos.query().delete().where({ id: id });
};
module.exports = {
  getTodos,
  createTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
};
