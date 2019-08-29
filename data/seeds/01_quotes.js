

exports.seed = function(knex, Promise) {
  // console.log(script_lines);

  return knex("quotes")
    .truncate()
    .then(() => {
      knex("quotes").insert([
        {
          id: "9544",
          episode_id: "32",
          number: "204",
          raw_text: "Miss Hoover: (OFF LISA'S REACTION) I'm back.",

          raw_character_text: "Miss Hoover",

          spoken_words: "I'm back.",
          normalized_text: "im back"
        },
        {
          id: "9545",
          episode_id: "32",
          number: "205",
          raw_text:
            "Miss Hoover: You see, class, my Lyme disease turned out to be...",

          raw_character_text: "Miss Hoover",

          spoken_words: "You see, class, my Lyme disease turned out to be...",
          normalized_text: "you see class my lyme disease turned out to be"
        },
        {
          id: "9546",
          episode_id: "32",
          number: "206",
          raw_text: "Miss Hoover: Psy-cho-so-ma-tic.",

          raw_character_text: "Miss Hoover",

          spoken_words: "Psy-cho-so-ma-tic.",
          normalized_text: "psy-cho-so-ma-tic"
        },
        {
          id: "9547",
          episode_id: "32",
          number: "207",
          raw_text: "Ralph Wiggum: Does that mean you were crazy?",

          raw_character_text: "Ralph Wiggum",

          spoken_words: "Does that mean you were crazy?",
          normalized_text: "does that mean you were crazy"
        },
        {
          id: "9548",
          episode_id: "32",
          number: "208",
          raw_text: "JANEY: No, that means she was faking it.",

          raw_character_text: "JANEY",

          spoken_words: "No, that means she was faking it.",
          normalized_text: "no that means she was faking it"
        }
      ]);

      // Inserts seed entries
      // for (item in script_lines) {
      //   knex("quotes").insert([{ "id": item.id, "quote": item.spoken_words, "character": item.raw_character_text, "episode": item.episode_id}])
      // }
    });
};
