
exports.up = function(knex) {
    return knex.schema.table('note', function(t) {
        t.string('slug').notNull().default('null');
    });
};

exports.down = function(knex) {
    return knex.schema.table('note', function(t) {
        t.dropColumn('slug');
    });
};
