const sequelize = require('../config/connection');
const User = require('../models/User.js');

test('Checks for null values', async () => {
  const user1 = {};

  const user2 = {
    username: 'test',
    email: 'test@test.com',
    password: '1111111111111',
  };

  const newUser1 = User.build(user1);
  const newUser2 = User.build(user2);

  await expect(newUser1.validate()).rejects.toThrow('notNull');
  await expect(newUser2.validate()).resolves.not.toThrow();
});

test('Checks for short passwords', async () => {
  const user1 = {
    username: 'test',
    email: 'test@test.com',
    password: '123',
  };

  const user2 = {
    username: 'test',
    email: 'test@test.com',
    password: 'password123',
  };

  const newUser1 = User.build(user1);
  const newUser2 = User.build(user2);

  await expect(newUser1.validate()).rejects.toThrow(
    'Validation len on password failed'
  );
  await expect(newUser2.validate()).resolves.not.toThrow();
});

test('Checks for alphanumeric username', async () => {
  const user1 = {
    username: 'test_123',
    email: 'test@test.com',
    password: '123',
  };

  const user2 = {
    username: 'test',
    email: 'test@test.com',
    password: 'password123',
  };

  const newUser1 = User.build(user1);
  const newUser2 = User.build(user2);

  await expect(newUser1.validate()).rejects.toThrow(
    'Validation isAlphanumeric on username failed'
  );
  await expect(newUser2.validate()).resolves.not.toThrow();
});
