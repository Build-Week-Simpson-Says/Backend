

exports.seed = function (knex, Promise) {



  return knex("quotes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("quotes").insert([
        { quote: "Eat My Shorts", character: "Bart", episode: "All" },
        { quote: "Mr. Bergstrom! Hey, Mr. Bergstrom!", character: "Lisa", episode: "245" },
        { quote: "Hi! You're Homer's sister-in-law, right? I remember you, but I don't remember you being so beau --tiful.", character:"Barney Gumble", episode: "32" },
        { quote: "You little monkey... you're a little monkey, aren't you?", character: "Homer Simpson", episode: "42" }, 
      ]);
    });
};
