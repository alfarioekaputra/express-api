
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
      table.increments('id').primary();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.timestamps(false, true);
      table.unique('email');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('user');
};
