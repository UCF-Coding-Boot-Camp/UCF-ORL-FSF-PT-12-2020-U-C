const router = require('express').Router();
const bookRoutes = require('./bookRoutes');

// Prefix all routes defined in `bookRoutes.js` with `/books
router.use('/books', bookRoutes);

module.exports = router;
