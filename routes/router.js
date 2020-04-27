
const { Router } = require('express');
const router = new Router();
// split up route handling
router.use('/notes', require('./api/notes.js'));
router.use('/user', require('./api/user.js'));
// etc.

module.exports = router;
