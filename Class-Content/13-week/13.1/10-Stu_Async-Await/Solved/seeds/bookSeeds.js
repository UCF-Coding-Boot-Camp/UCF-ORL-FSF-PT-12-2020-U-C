const sequelize = require('../config/connection');

const Book = require('../models/Book');
const Library = require('../models/Library');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json');

// Add the `async` keyword to the function `seedDatabase` to make Asynchronous.
const seedDatabase = async () => {

  // Add the `await` keyword infront of the expressions inside the `async` function.
  await sequelize.sync({ force: true });

  // Once JavaScript recogonizes the `await` keyword it waits for the promise to be fufilled before moving on.
  await Book.bulkCreate(bookSeedData);

  await Library.bulkCreate(librarySeedData);

  process.exit(0);
};

seedDatabase();
