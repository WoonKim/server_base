exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('name');
    table.string('password');
    table.integer('age');
    table.string('email');
    table
      .dateTime('created_on')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));

    table
      .dateTime('updated_on')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
