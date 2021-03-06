const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Library extends Model {}

Library.init(
  {
    location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    amount_of_books: {
      type: DataTypes.INTEGER
    },
    book_capacity: {
      type: DataTypes.INTEGER
    },
    year_built: {
      type: DataTypes.INTEGER
    },
    is_accessible: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'library'
  }
);

module.exports = Library;