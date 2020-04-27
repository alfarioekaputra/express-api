const { Router } = require('express');
const userController = require('../../controllers/user.js')
const authenticateToken = require('../../middlewares/authToken.js')
const router = new Router();

router.get('/', authenticateToken, userController.index);
router.post('/register', userController.add);
router.post('/login', userController.login);

module.exports = router;