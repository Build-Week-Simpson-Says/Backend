const db = require("../dbConfig");

module.exports = {
  add,
  find
};

function add (newFavorite) {
    return db('users')
        .insert(newFavorite)
        .into('users');
}

function find() {
  return db("users");
}

