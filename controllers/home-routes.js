// Route for the Homepage
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


//TODO: homepage view with all populated posts
router.get('/', async (req, res) => {
  res.send('Render all posts veiw along with all posts from the db')
}); 
  
//TODO: single post
router.get('/post/:id', async (req, res) => {
  res.send('Render single posts veiw along with posts with id ${req.paramas.id}')
}); 
   
//TODO: login view   
router.get('/login', async (req, res) => {
  res.send('Render logins veiw from the db')
}); 
  
//TODO: Sing up view
router.get('/signup', async (req, res) => {
  res.send('Render signup veiw from the db')
}); 

module.exports = router;