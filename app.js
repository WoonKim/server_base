const createError = require("http-errors");
const express = require("express");
const path = require("path");
const { Model } = require("objection");

const cookieParser = require("cookie-parser");
const logger = require("morgan");
const knex = require("./src/config/knex");

Model.knex(knex);

const indexRouter = require("./src/routes/index");
const todoRouter = require("./src/routes/todo");
const app = express();


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/todos", todoRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
