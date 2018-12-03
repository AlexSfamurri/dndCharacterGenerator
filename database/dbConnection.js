const pg = require('pg-promise');
const { password } = require('../config');

const cn = {
  host: 'elmer.db.elephantsql.com',
  port: 5432,
  database: 'ytalolst',
  user: 'ytalolst',
  password: password
};