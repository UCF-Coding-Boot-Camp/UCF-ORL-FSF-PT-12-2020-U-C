const router = require('express').Router();
const books = require('./bookRoutes');

router.use('/books', books);

module.exports = router;