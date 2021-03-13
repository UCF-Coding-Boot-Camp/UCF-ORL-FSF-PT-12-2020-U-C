const sequelize = require('../config/connection');
const Dish = require('../models/Dish');
const dishData = require('./dish-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Dish.bulkCreate(dishData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();