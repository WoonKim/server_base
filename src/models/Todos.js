const { Model } = require("objection");
class Todos extends Model {
  static get tableName() {
    return "todos";
  }

  static get relationMappings() {
    return {};
  }
}

module.exports = Todos;
