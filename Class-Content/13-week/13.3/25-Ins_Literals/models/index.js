const Driver = require('./Driver');
const License = require('./License');
const Car = require('./Car');

Driver.hasOne(License, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

License.belongsTo(Driver, {
  foreignKey: 'driver_id',
});

Driver.hasMany(Car, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

Car.belongsTo(Driver, {
  foreignKey: 'driver_id',
});

module.exports = { Driver, License, Car };
