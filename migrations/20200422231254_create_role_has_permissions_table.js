
exports.up = function(knex) {
    return knex.schema.createTable('role_has_permission', function(table) {
        table.integer('permission_id').notNullable();
        table.integer('role_id').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('role_has_permission');
};
