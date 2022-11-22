const path = require('path');
const express = require('express');
const routes = require('./controllers');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Set handlebars as the default template engine
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret:process.env.secret,
    cookie: {
       // Stored in milliseconds
      maxAge: 300000, // expires after 5 minutes 
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

app.use(session(sess));

// Set up body & url parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up static middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set up route middleware
app.use(routes);

// Sync with db, then start server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => { 
//   console.log(`Server now listening on ${PORT}!`)
//   });
// });
app.listen(PORT, () => { 
  console.log(`Server now listening on ${PORT}!`)
  sequelize.sync({ force: false })
});

