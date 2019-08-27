

exports.seed = function (knex, Promise) {



  return knex("quotes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("quotes").insert([
        { id: 1, quote: "Eat My Shorts", character: "Bart", episode: "All" }
      ]);
    });
};
