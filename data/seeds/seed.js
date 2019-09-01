/*
Install the following npm libraries
​
 npm i functional-promises cli-progress
​
to execute on heroku run the following command:
​
  npx heroku run -a appname node data/seed.js
​
change appname to the name of your application on heroku
*/
​
const knex = require('knex');
const FP = require('functional-promises');
const cliProgress = require('cli-progress');
​
const db = require('./dbConfig.js');
const inputData = require('./clean_lines.js');
​
// create a new progress bar and use shades_classic theme
const progressBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);
​
cleanUp()
  .tap(initialStatus)
  .concurrency(getThreadLimit())
  .map(createQuote)
  .tap(updateSerialSeed)
  .then(finalize)
  .catch(errorHandler);
​
function cleanUp() {
  return FP.resolve(
    db('quotes')
      .del() // notice we are not truncating, the Primary Key will be reset at the end
      .then(() => inputData)
  );
}
​
function initialStatus() {
  console.log('Cleanup complete!', inputData.length);
  progressBar.start(inputData.length, 0); // this is for the progress bar
}
​
function getThreadLimit() {
  // heroku sets the NODE_ENV to production
  return process.env.NODE_ENV === 'production' ? 8 : 1;
}
​
function createQuote(item, index) {
  progressBar.update(index + 1);
​
  return db('quotes').insert(item);
}
​
function updateSerialSeed() {
  // this makes sure the auto-incrementing primary key is set
  // the the next value after the highest id inserted
  const prodCommand =
    'ALTER SEQUENCE quotes_id_seq RESTART WITH (SELECT MAX(id) FROM quotes);';
  const devCommand =
    'UPDATE sqlite_sequence SET seq = (SELECT MAX(id) FROM quotes) WHERE name="quotes"';
  const command =
    process.env.NODE_ENV === 'production' ? prodCommand : devCommand;
  return knex.raw(command);
}
​
function finalize() {
  progressBar.stop();
​
  // this closes the connection to the database
  db.destroy(doneStatus);
}
​
function doneStatus() {
  console.log('All quotes added to the database: ', inputData.length);
}
​
function errorHandler(error) {
  console.error({ message: 'Error adding quotes', error });
}