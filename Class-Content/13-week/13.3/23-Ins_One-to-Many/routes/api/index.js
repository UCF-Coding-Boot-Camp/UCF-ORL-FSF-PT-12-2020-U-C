const router = require('express').Router();
const driverRoutes = require('./driverRoutes');

router.use('/drivers', driverRoutes);

module.exports = router;
