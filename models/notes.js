const config = require('../knexfile.js')[process.env.NODE_ENV || 'development']
const db = require('knex')(config);
const slugify = require('slugify');

function getAll() {
    try{
        return db.select().from('note');
    } catch (err) {
        console.error(err.message);
    }
}

function get(slug) {
    try {
        return db.select().from('note').where('slug', slug).first()
    } catch (err) {
        console.error(err.message)
    }
}

function store(data) {
    try {
        let title = data.title;
        let body = data.body;
        let slug = slugify(data.title, {
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
            remove: undefined, // remove characters that match regex, defaults to `undefined`
            lower: true,      // convert to lower case, defaults to `false`
            strict: false,     // strip special characters except replacement, defaults to `false`
        });

        return db('note').insert({
            "title": title,
            "body": body,
            "slug": slug
        });
    } catch (err){
        console.log(err.message);
    }
}

function update(slug, data){
    try {
        let title = data.title;
        let body = data.body;
        let slug = slugify(data.title, {
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
            remove: undefined, // remove characters that match regex, defaults to `undefined`
            lower: true,      // convert to lower case, defaults to `false`
            strict: false,     // strip special characters except replacement, defaults to `false`
        });

        return db('note').where('slug', slug).update({
            "title": title,
            "body": body,
            "slug": slug
        });

    }catch (err) {
        console.error(err);
    }
}

function remove(slug) {
    return db('note').where('slug', slug).del();
}

module.exports = {
    getAll: getAll,
    get: get,
    store: store,
    update: update,
    remove: remove
}