const router = require('express').Router();

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  res.render('homepage');
});

module.exports = router;
