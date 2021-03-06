const router = require('express').Router();
const User = require('../../models/User');

// GET one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      numberOfPets: req.body.numberOfPets,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for instance method hasPets - a user can visit this url to check if a user at the specified id has pets

router.get('/:id/hasPets', async (req, res) => {
  try {
    // First, we find a user using their primary key (provided by params)
    const userData = await User.findByPk(req.params.id);
    // If userData evaluates as false (no user exists with that primary key), then we will send an error message
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    // If a user does exist at the primary key, we get to use the instance method that we wrote in User.js to see if the user has pets
    const petData = userData.hasPets();
    // If petData evaluates as false (user has 0 pets), then the user will receive the message below
    if (!petData) {
      res.status(400).json({ message: 'This person has no pets.' });
      return;
    }
    // Otherwise, the user will see that the user that they searched does have pets!
    res.json({ message: 'This person has pets!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
