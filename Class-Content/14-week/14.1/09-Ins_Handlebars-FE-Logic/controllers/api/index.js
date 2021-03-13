const router = require('express').Router();

const dishRoutes = require('./dish-routes.js');

router.use('/dish', dishRoutes);

module.exports = router;