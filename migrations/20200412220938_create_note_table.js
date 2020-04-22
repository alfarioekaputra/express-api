
exports.up = function(knex) {
    return knex.schema.createTable('note', function(table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('body').notNullable();
        table.timestamps(false, true);
      });    
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('note');
};
