const db = require("./dbConfig");

module.exports = {
  add,
  find,
  findBy
};

function add (newFavorite) {
    return db('users')
        .insert(newFavorite)
        .into('favorite');
}

function findBy(search) {
  return db("quotes").where(search);
}

function find() {
  return db('quotes')
}
