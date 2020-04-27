
exports.up = function(knex) {
    return knex.schema.createTable('category', function(table) {
        table.increments('id').primary();
        table.integer('parent_id');
        table.string('name').notNullable();
        table.string('slug').notNull().default('null');
        table.timestamps(false, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('category');
};
