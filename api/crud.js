'use strict';

const userLib = require('../lib/db');

const create = function(req, res) {
  userLib.createUser();
  res.send('bye')
};

const read = function(req, res) {
  userLib.readUser();
  res.send('hi')
};

const update = function(req, res) {

};


const del = function(req, res) {

};

const query = function(req, res) {

};

module.exports = {
  create,
  read,
  update,
  del,
  query
}