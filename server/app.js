const app = require('express')();
const bodyParser = require('body-parser');
const dice = require('roll');

module.exports = { app, bodyParser, dice };