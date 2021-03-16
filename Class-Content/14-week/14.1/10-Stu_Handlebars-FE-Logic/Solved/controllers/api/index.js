const router = require('express').Router();

const dishRoutes = require('./dish-routes');

router.use('/dish', dishRoutes);

module.exports = router;