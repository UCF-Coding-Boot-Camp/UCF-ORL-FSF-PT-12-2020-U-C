const router = require('express').Router();
// Include the Book model with the other imports
const { Reader, Book, LibraryCard } = require('../../models');

// GET all readers
router.get('/', async (req, res) => {
  try {
    const readerData = await Reader.findAll({
      // Add Book as a second model to JOIN with
      include: [{ model: LibraryCard }, { model: Book }],
    });
    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single reader
router.get('/:id', async (req, res) => {
  try {
    const readerData = await Reader.findByPk(req.params.id, {
      // Add Book as a second model to JOIN with
      include: [{ model: LibraryCard }, { model: Book }],
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a reader
router.post('/', async (req, res) => {
  try {
    const readerData = await Reader.create(req.body);
    res.status(200).json(readerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a reader
router.delete('/:id', async (req, res) => {
  try {
    const readerData = await Reader.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
