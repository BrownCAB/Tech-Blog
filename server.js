const path = require('path');
const express = require('express');
const sequalize = require('/');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;