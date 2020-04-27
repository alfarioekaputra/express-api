const { Router } = require('express');
const categoryController = require('../../../controllers/master/category.js')
const authenticateToken = require('../../../middlewares/authToken.js')

const router = new Router();

// router.all('*', authenticateToken)

router.get('/', categoryController.index);
router.get('/view/:slug', categoryController.view);
router.post('/create', categoryController.create);
router.put('/update/:slug', categoryController.update);
router.delete('/remove/:slug', categoryController.remove);

module.exports = router;