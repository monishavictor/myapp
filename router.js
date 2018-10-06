'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/monisha', {});

mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

mongoose.Promise = global.Promise;

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const middleware = require('./middleware/auth');
const crud = require('./api/crud');

const index = function(req, res) {
  res.send('hello world');
}

module.exports = function(app) {
  app.use(middleware.dummy);
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get('/', index);
  app.post('/create', crud.create);
  app.get('/read', crud.read);
  app.put('/update', crud.update);
  app.delete('/del', crud.del);
  app.get('/read/:id', crud.query);
};