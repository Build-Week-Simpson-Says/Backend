exports.seed = function(knex, Promise) {
  // console.log(script_lines);

  return knex("quotes")
    .truncate()
    .then(function() {
      return knex("quotes").insert([
        {
          id: 9544,
          episode: "204",
          character: "Miss Hoover",
          quote: "I'm back."
        },
        {
          id: 9545,
          episode: "205",
          character: "Miss Hoover",
          quote: "You see, class, my Lyme disease turned out to be..."
        },
        {
          id: 9546,
          episode: "206",
          character: "Miss Hoover",

          quote: "Psy-cho-so-ma-tic."
        },
        {
          id: 9547,
          episode: "207",
          character: "Ralph Wiggum",

          quote: "Does that mean you were crazy?"
        },
        {
          id: 9548,
          episode: "208",
          character: "JANEY",

          quote: "No, that means she was faking it."
        }
      ]);

      // Inserts seed entries
      // for (item in script_lines) {
      // knex("quotes").insert([{ "id": item.id, "quote": item.quote, "character": item.character, "episode":   //
    });
};
