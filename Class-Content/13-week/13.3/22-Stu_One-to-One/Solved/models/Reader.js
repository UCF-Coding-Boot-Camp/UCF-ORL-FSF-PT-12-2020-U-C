const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Reader extends Model {}

Reader.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newReader) => {
        try {
          newReader.password = await bcrypt.hash(newReader.password, 10);
          return newReader;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
      beforeUpdate: async (updatedReader) => {
        try {
          updatedReader.password = await bcrypt.hash(
            updatedReader.password,
            10
          );
          return updatedReader;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reader',
  }
);

module.exports = Reader;
