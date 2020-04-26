const bcrypt = require('bcrypt');
const { Model } = require('objection');
const knex = require('../config/db.js');

Model.knex(knex);

class UserModel extends Model {
    static get tableName() {
        return 'user'
    }

    static get jsonSchema() {
        return {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            id: { type: 'integer' },
            email: { type: 'string', minLength: 1, maxLength: 255 },
            password: { type: 'string' } // optional
          }
        };
    }
    
}

async function add(data) {
    try {
        const {email, password} = data;
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const user = await UserModel.query().insert({ email: email, password: hashPassword });

        return user;
    }catch (err) {
        return {
            'error': true, 
            'message': err.message
        }
    }
}

async function findAll() {
    try {
        return await UserModel.query();
    } catch (err) {
        return {
            'error': true, 
            'message': err.message
        }
    }
}

async function login(email, password) {
    try{
        const user = await UserModel.query().findOne({email: email});
        
        if(user) {
            const checkPassword = await bcrypt.compare(password, user.password);

            if(!checkPassword){
                return {
                    'error': true, 
                    'message': 'wrong username or password'
                }
            }else {
                return {
                    'error': false, 
                    'message': 'Login success'
                }
            }

        } else {
            return {
                'error': true, 
                'message': 'wrong username or password'
            }
        }
    } catch (err) {
        return {
            'error': true, 
            'message': err.message
        }
    }
}

module.exports = {
    add: add,
    findAll: findAll,
    login: login
}