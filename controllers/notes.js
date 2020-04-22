const Note = require('../models/notes.js');

async function index(req, res) {
    const notes = await Note.getAll();
    res.json( {notes: notes });
}

async function store(req, res) {
    const result = await Note.store(req.body);

    if(result)
        res.json({ message: 'success' });
}

async function view(req, res) {
    const note = await Note.get(req.params.slug);
    res.json( {note: note} );
}

async function update(req, res) {
    const note = await Note.update(req.params.slug, req.body);
    res.json( {note: note} );
}

async function remove(req, res) {
    const { slug } = req.params;
    const note = await Note.remove(slug);
    res.json( {note: note} );
}

module.exports = {
    index: index,
    store: store,
    view: view,
    update: update,
    remove: remove,
}