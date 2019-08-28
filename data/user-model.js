const db = require("./dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  addFavorite,
  findByUser,
  findFavorites,
  deleteFavorite
};

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

async function find() {
  const users = await db("users");

  const withQuotes = users.map(async user => {
    user.favorites = await db("favorites")
      .where("user_favorites", user.id)
      .join("quotes", "quotes.id", "favorites.quote_id")
      .select("quotes.*");
    return user;
  });

  const results = await Promise.all(withQuotes);

  return results;
}

function findFavorites() {
  return db("favorites");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function findById(id) {
  let user = await db("users")
    .where({ id })
    .first();
  user.favorites = await db("favorites")
    .where("user_favorites", id)
    .join("quotes", "quotes.id", "favorites.quote_id")
    .select("quotes.*");
  return user;
}

function deleteFavorite(delFav) {
  return db("favorites")
    .where(delFav, "favorite.id")
    .del();
}

function findByUser(userId) {
  return db("favorites")
    .join("users", "users.id", "favorites.user_favorites")
    .where("favorites.user_favorites", userId);
}

function addFavorite(newFavorite) {
  return db("favorites")
    .insert(newFavorite)
    .then(() => {
      return db("users")
        .join("favorites", "favorites.user_favorites", "users.id")
        .select("favorites.*")
        .first();
    });
}
