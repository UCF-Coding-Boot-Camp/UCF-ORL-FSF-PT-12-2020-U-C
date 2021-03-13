const sequelize = require('../config/connection');
const { Reader, LibraryCard } = require('../models');

const readerSeedData = require('./readerSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const readers = await Reader.bulkCreate(readerSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of readers) {
    const newCard = await LibraryCard.create({
      reader_id: id,
    });
  }

  process.exit(0);
};

seedDatabase();
