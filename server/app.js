const app = require('express')();
// this is where most of the server requirements are going to be made
const app = require('express');
const bodyParser = require('body-parser');
const dice = require('roll');

module.exports = { app, bodyParser, dice };