const { Router } = require('express');
const notesController = require('../../controllers/notes.js')
const authenticateToken = require('../../middlewares/authToken.js')

const router = new Router();

router.all('*', authenticateToken)

router.get('/', notesController.index);
router.get('/view/:slug', notesController.view);
router.post('/store', notesController.store);
router.put('/update/:slug', notesController.update);
router.delete('/remove/:slug', notesController.remove);

module.exports = router;