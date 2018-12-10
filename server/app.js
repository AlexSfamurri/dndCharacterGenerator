const app = require('express')();
// this is where most of the server npm requirements are going to be made
const app = require('express');
const bodyParser = require('body-parser');
const dice = require('roll');
const select = require('../database/dbSelectHelpers');

module.exports = { app, bodyParser, dice, select };