const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

let results = [];

const insertQuote = (knex, batch) => {
  return knex('quotes').insert(batch).catch(err => console.error(err));
}

exports.seed = async function (knex) {
  knex("quotes")
    .del()
  const lines = require('../clean_lines.json');
  quote_promises = [];
  counter = 0;
  batch = [];
  for (line in lines) {
    if (counter < 40) {
      batch.push(lines[line]);
      counter += 1;
    } else {
      batch.push(lines[line]);
      quote_promises.push(insertQuote(knex,batch));
      batch = [];
      counter = 0;
    }
  }
  return Promise.all(quote_promises);
};

// {
//   "id": "9549",
//   "episode_id": "32",
//   "number": "209",
//   "raw_text": "Miss Hoover: No, actually, it was a little of both. Sometimes when a disease is in all the magazines and all the news shows, it's only natural that you think you have it.",
//   "timestamp_in_ms": "848000",
//   "speaking_line": "true",
//   "character_id": "464",
//   "location_id": "3",
//   "raw_character_text": "Miss Hoover",
//   "raw_location_text": "Springfield Elementary School",
//   "spoken_words": "No, actually, it was a little of both. Sometimes when a disease is in all the magazines and all the news shows, it's only natural that you think you have it.",
//   "normalized_text": "no actually it was a little of both sometimes when a disease is in all the magazines and all the news shows its only natural that you think you have it",
//   "word_count": "31"
// }