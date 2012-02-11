GLOBAL.ROOT = __dirname;

var express = require('express'),
  __ = require('underscore'),
  Backbone = require('backbone'),
  templateEngine = require('hbs'),
  app = express.createServer();

require(ROOT + '/config.js')(app, express, templateEngine);

require(ROOT + '/routes.js')(app);

app.listen(3666);

