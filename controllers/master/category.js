const Category = require('../../models/category.js');


async function index(req, res) {
    const category = await Category.findAll();

    res.json({categories: category})
}

async function create(req, res) {
    const categoryData = req.body;

    const result = await Category.create(categoryData);

    res.json({result: result})
}


async function view(req, res) {
    const result = await Category.view(req.params.slug);

    res.json({result: result})
}

async function update(req, res) {
    const category = await Category.update(req.params.slug, req.body);
    res.json( {category: category} );
}

async function remove(req, res) {
    const category = await Category.remove(req.params.slug);
    res.json( {category: category} );
}

module.exports = {
    index: index,
    create: create,
    view: view,
    update: update,
    remove: remove,
}