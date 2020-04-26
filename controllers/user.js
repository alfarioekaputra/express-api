const User = require('../models/user.js');

async function add(req, res) {
    const {email, password} = req.body;

    const user = {
        email, 
        password
    };

    const result = await User.add(user);

    res.json({result: result});
}

async function login(req, res) {
    const result = await User.login(req.body.email, req.body.password);

    res.json({result: result});
}

async function index(req, res) {
    const user = await User.findAll();

    res.json({user: user})
}

module.exports = {
    add: add,
    login: login,
    index: index
}