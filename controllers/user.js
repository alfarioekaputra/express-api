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
    const match = await User.login(req.body.email, req.body.password);

    if(match === true) {
        res.json({'message': 'Login success'});
    } else {
        res.json({'message': 'Login failed'});
    }
}

module.exports = {
    add: add,
    login: login
}