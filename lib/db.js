var User = require('../models/user');

const userByIdSuccess = function (data) {
  console.log('data', data);
};

const userByIdFailed = function (err) {
  console.error('error', err);
};

const readUser = function() {
  User.findByIdAsync('5bb8a42489b8e18a0faa7f6d')
  .then(userByIdSuccess)
  .catch(userByIdFailed);
};


const createUser = function() {
  let user = new User();
  user.firstname = 'Monisha';
  user.lastname = 'Victor';
  user.contact = 100;
  user.address = {
    city: 'Nellore',
    state: 'Andhra Pradesh'
  };

  user.save();
};

module.exports = {
  readUser,
  createUser
};