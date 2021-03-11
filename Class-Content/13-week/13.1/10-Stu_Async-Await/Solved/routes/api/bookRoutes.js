const router = require('express').Router();
const Book = require('../../models/Book');

// Updates book based on its book_id
router.put('/:book_id', async (req, res) => {
  //Calls the update method on the Book model
  const updatedBook = await Book.update(
    {
      // All the fields you can update and the data attached to the request body.
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        book_id: req.params.book_id,
      },
    }
  );
  
  res.json(updatedBook);
});

// Delete route for a book with a matching book_id
router.delete('/:book_id', async (req, res) => {
  // Looks for the book based on the book_id given in the request parameters
  const deletedBook = await Book.destroy({
    where: {
      book_id: req.params.book_id,
    },
  });
  
  res.json(deletedBook);
});

module.exports = router;
