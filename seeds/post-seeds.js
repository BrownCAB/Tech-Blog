// Import Models
const { Post } = require('../models');

const postData = [
  {
    title: 'Hello World.',
    description:
      'fasd dsfasd garg ags aosdif dasf sdag sda dsa fdsa fds fasd fds fdsa',
    user_id: 6,
  },
  {
    title: 'Welcome!',
    description:
      'fasd dsfasd garg ags aosdif dasf sdag sda dsa fdsa fds fasd fds fdsa',
    user_id: 4,
  },
  {
    title: 'Tech Blog',
    description:
      'fasd dsfasd garg ags aosdif dasf sdag sda dsa fdsa fds fasd fds fdsa',
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts; 