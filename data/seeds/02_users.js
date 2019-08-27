exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "admin", password: "password", favorites: "" },
        { id: 2, username: "frontEnd", password: "123456", favorites: 1 }
      ]);
    });
};
