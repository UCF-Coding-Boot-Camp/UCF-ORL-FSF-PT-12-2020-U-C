const router = require('express').Router();
const bookRoutes = require('./bookRoutes');

router.use('/books', bookRoutes);

module.exports = router;
