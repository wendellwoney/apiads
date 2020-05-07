
exports.up = function(knex) {
    return knex.schema.createTable('ads', (table) => {
        table.increments();
        table.string('title').notNullable();
        table.decimal('price').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ads');
};
