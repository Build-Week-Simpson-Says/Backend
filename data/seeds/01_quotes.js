// const { chain } = require("stream-chain");
// const path = require("path");

// const { parser } = require("stream-json");
// const Asm = require('stream-json/Assembler')

// const { streamValues } = require("stream-json/streamers/StreamValues");

// const fs = require("fs");
// const zlib = require("zlib");

// const pipeline = chain([fs.createReadStream(path.resolve(__dirname,'./clean_lines.json')),
//   parser()
// ])

// const {asm} = Asm.connectTo(pipeline);

// exports.seed = function (knex) {
//   return knex("quotes").truncate().then(() => {
//     return knex("quotes").insert({ id: asm.id, quote: asm.quote, episode: asm.episode, character: asm.character})
//   })
// }

// //   const lines = require('../clean_lines.json');
// //   // console.log(lines[0])
// //   quote_promises = []
// //   for (line in lines) {
// //     quote_promises.push(insertQuote(knex,lines[line]));

// //   }
// //   return Promise.all(quote_promises);

// // };

// // let newLines = [];
// // const insertQuote = (knex, line) => {
// //   return knex("quotes").select()
// //   .where('id', line.id)
// //   .then(function(rows) {
// //     if (rows.length===0) {
// //         // no matching records found
// //         return knex('quotes').insert(line)
// //     } else {
// //         // return or throw - duplicate name found
// //         // console.log('dupe')
// //     }
// //   })
// //   .catch(error => {
// // console.log(error)
// //   })
// // }


//   // const newData = JSON.parse(data);

//   // const csv = require('csv-parser');
//   // const fs = require('fs');
//   // const path = require('path');

//   // let results = [];

//   // // {
//   // //   "id": "9549",
//   // //   "episode_id": "32",
//   // //   "number": "209",
//   // //   "raw_text": "Miss Hoover: No, actually, it was a little of both. Sometimes when a disease is in all the magazines and all the news shows, it's only natural that you think you have it.",
//   // //   "timestamp_in_ms": "848000",
//   // //   "speaking_line": "true",
//   // //   "character_id": "464",
//   // //   "location_id": "3",
//   // //   "raw_character_text": "Miss Hoover",
//   // //   "raw_location_text": "Springfield Elementary School",
//   // //   "spoken_words": "No, actually, it was a little of both. Sometimes when a disease is in all the magazines and all the news shows, it's only natural that you think you have it.",
//   // //   "normalized_text": "no actually it was a little of both sometimes when a disease is in all the magazines and all the news shows its only natural that you think you have it",
//   // //   "word_count": "31"

