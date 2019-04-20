const express = require('express');
const route = express.Router();

const home = require('./home');

route.get('/', home.get);

module.exports = route;
