const User = require('../model/user');

module.exports = class UsersController {

  getAll() {
    return new Promise((resolve, reject) => {
      User.find((err, users) => {
        if (err) console.log('err');
        resolve(users.map(user => user.toObject()));
      });
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      User.findById(id, (err, user) => {
        if (user) {
          resolve(user.toObject());
        } else {
          reject(new Error('User not found'));
        }
      });
    });
  }

  create(user) {
    return new Promise((resolve, reject) => {
      User.create(user, (err, user) => {
        if (err) reject(err)
        resolve(user);
      });
    });
  }

  search(lastName) {
    return new Promise((resolve, reject) => {
        User.find({ lastName: lastName }, (err, user) => {
          if (user) {
            resolve(user.map(user => user.toObject()));
          } else {
            reject(new Error('User ' + lastName + ' not found'));
          }
        });
    })
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      User.remove({ "_id": id }, (err) => {
        if (err) {
          reject(new Error('User not found'));
        }
        resolve(true);
      });
    });
  }
}
