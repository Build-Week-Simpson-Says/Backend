const db = require("./dbConfig");

module.exports = {
  // addQuote,
  find,
  findBy
};

// function addQuote (newFavorite) {
//     return db('users')
//         .insert(newFavorite)
//         .into('favorites');
// }

function findBy(search) {
  return db("quotes").where(search);
}

function find() {
  return db('quotes')
}
