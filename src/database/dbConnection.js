const { parse } = require('url');
const { Pool } = require('pg');
require('dotenv').config();

const { DB_URL } = process.env;

const params = parse(DB_URL);
const [user, password] = params.auth.split(':');
const options = {
  user,
  password,
  port: params.port,
  host: params.hostname,
  database: params.pathname.split('/')[1],
  ssl: params.hostname !== 'localhost',
  max: 2,
};
module.exports = new Pool(options);
