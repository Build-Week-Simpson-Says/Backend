
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {quote_id: 1, user_favorites: 1},
        {quote_id: 1, user_favorites: 2}
  
      ]);
    });
};
