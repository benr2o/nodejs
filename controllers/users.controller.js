let lastId = 0;

const users = [{
  id: lastId++,
  firstName: 'Lucien',
  lastName: 'DROGO'
}, {
  id: lastId++,
  firstName: 'Bob',
  lastName: 'RANDOM'
}];

module.exports = {

  getAll: function() {
    return users;
  },

  getOne: function(id) {
    return users.find((u) => u.id === id);
  },

  create: function(user) {
    const newUser = {
      ...user,
      id: lastId++
    }
    users.push(newUser);
    return newUser;
  },

  delete: function(id) {

  }
};
