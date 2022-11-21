const { User } = require('../models');

const userdata = [
  {
    username: 'Calah_1',
    email: 'calah@mail.com',
    password: 'password123',
  },
  {
    username: 'Ashley_2',
    email: 'ashley@mail.com',
    password: 'password123',
  },
  {
    username: 'Monique_3',
    email: 'monique@mail.com',
    password: 'password123',
  },
 ];
  
  const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;