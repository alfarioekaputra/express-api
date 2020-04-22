
exports.up = function(knex) {
    return knex.schema.createTable('permission', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('guard_name').notNullable();
        table.string('label').notNullable();
        table.timestamps(false, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('permission');
};
