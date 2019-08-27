const db = require('./dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  addFavorite
};

async function add(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function addFavorite (newFavorite) {
  return db('users')
      .insert(newFavorite)
      .into('favorites');
}