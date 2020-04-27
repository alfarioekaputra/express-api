const { Model } = require('objection');
const knex = require('../config/db.js');
const setSlug = require('../middlewares/slug.js');

Model.knex(knex);

class CategoryModel extends Model {
    static get tableName() {
        return 'category'
    }

    static get jsonSchema() {
        return {
          type: 'object',
          required: ['name'],
          properties: {
            id: { type: 'integer' },
            name: { type: 'string', minLength: 1, maxLength: 255 },
          }
        };
    }

    $beforeInsert(context) {
        this.slug = setSlug(this.name);
    }

    $beforeUpdate(context) {
        this.slug = setSlug(this.name);
    }
}

async function findAll() {
    try {
        return await CategoryModel.query().orderBy('id', 'asc');
    } catch (err) {
        return {
            'error': true, 
            'message': err.message
        }
    }
}

async function view(slug) {
    try {
        const category = await CategoryModel.query().findOne({slug: slug});

        return category;

    }catch (err) {
        return {
            'error': true, 
            'message': err.message
        } 
    }
}

async function create(data) {
    try {
        const category = await CategoryModel.query().insert(data);

        return category;
    } catch (err) {
        return {
            'error': true, 
            'message': err.message
        } 
    }
}

async function update(slug, data) {
    try {
       const category = await CategoryModel.query()
        .findOne({slug: slug})
        .patch(data);

        return category;

    }catch (err) {
        return {
            'error': true, 
            'message': err.message
        } 
    }
}

async function remove(slug) {
    try {
        const category = await CategoryModel.query()
            .delete()
            .where({slug: slug});

        return category;

    }catch (err) {
        return {
            'error': true, 
            'message': err.message
        } 
    }

}

module.exports = {
    findAll: findAll,
    create: create,
    view: view,
    update: update,
    remove: remove,
}