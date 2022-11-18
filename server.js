const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set handlebars as the default template engine
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set up body & url parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up static middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set up route middleware
app.use(routes);

// Sync with db, then start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => { 
  console.log(`Server now listening ${PORT}`)
  });
});


// Other code
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);




// const helpers = require('./utils/helpers');


// const sess = {
//   secret: 'Super secret secret',
//   cookie: {
//      // Stored in milliseconds
//     maxAge: 10 * 60 * 1000, // expires after 10 minutes 
//     expires: 600, // expires after 10 minutes Internet explorer
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));



