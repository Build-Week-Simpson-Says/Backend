exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("favorites")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("favorites").insert([{ quote_id: 9544, user_favorites: 1 }]);
    });
};
