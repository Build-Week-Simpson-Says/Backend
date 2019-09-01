
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorites').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {id: 1, user_favorites: 1, quote_id: 9553},
      ]);
    });
};
