const router = require('express').Router();
const readerRoutes = require('./readerRoutes');
const libraryCardRoutes = require('./libraryCardRoutes');

router.use('/readers', readerRoutes);
router.use('/cards', libraryCardRoutes);

module.exports = router;
