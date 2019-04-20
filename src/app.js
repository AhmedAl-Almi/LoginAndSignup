const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const path = require('path')
const controller = require('./controllers/index');
const app = express();

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(controller);
module.exports = app;
