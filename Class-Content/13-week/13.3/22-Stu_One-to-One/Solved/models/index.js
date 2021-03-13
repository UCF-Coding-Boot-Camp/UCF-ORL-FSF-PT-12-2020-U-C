const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // When we delete a Reader, make sure to also delete the associated Library Card.
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { Reader, LibraryCard };
