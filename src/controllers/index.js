const express = require('express');

const route = express.Router();
const home = require('./home');
const signup = require('./signup');

route.get('/', home.get);
route.get('/signup', signup.get);
route.post('/signup', signup.post);

module.exports = route;
