exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('uf', 2).notNullable();
    table.string('city').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};

