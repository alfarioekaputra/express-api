const { Router } = require('express');
const userController = require('../../controllers/user.js')

const router = new Router();

router.get('/', userController.index);
router.post('/register', userController.add);
router.post('/login', userController.login);

module.exports = router;