exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('todos', table => {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('description').notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('todos');
};