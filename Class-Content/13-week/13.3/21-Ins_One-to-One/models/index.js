const Driver = require('./Driver');
const License = require('./License');

// Define a Driver as having one License to create a foreign key in the `license` table
Driver.hasOne(License, {
  foreignKey: 'driver_id',
  // When we delete a Driver, make sure to also delete the associated License.
  onDelete: 'CASCADE',
});

// We can also define the association starting with License
License.belongsTo(Driver, {
  foreignKey: 'driver_id',
});

// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { Driver, License };
