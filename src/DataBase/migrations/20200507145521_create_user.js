
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('login').notNullable();
      table.string('senha').notNullable();

  });
};

exports.down = function(knex) {
    return knex.schema.DropTable('users');
};
