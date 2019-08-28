exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "admin", password: "password" },
        { username: "frontEnd", password: "123456", favorites: 1 }
      ]);
    });
};
