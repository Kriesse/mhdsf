GLOBAL.ROOT = __dirname;

var express = require('express'),
  __ = require('underscore'),
  Backbone = require('backbone'),
  templateEngine = require('hbs'),
  app = express.createServer();

require(ROOT + '/config.js')(app, express, templateEngine);

require(ROOT + '/routes.js')(app);

if (!module.parent) {
  app.listen(app.settings.port);
  console.log("Server listening on port %d", app.settings.port);
}

var io = require('socket.io').listen(app);
require('./test/sockettest.js').start(io);
