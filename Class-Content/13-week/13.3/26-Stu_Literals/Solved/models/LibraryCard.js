const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LibraryCard extends Model {}

LibraryCard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    card_number: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    reader_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'reader',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'library_card',
  }
);

module.exports = LibraryCard;
