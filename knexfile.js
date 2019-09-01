// heroku will add the DATABASE_URL environment variable
// during development it would connect to your local postgres installation
const productionConnection =
  process.env.DATABASE_URL || "postgres://localhost/postgres";
module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./data/users.db3" }, // change this if you want a different name for the database
    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on Foreign Key enforcement
      }
    }
  },
  production: {
    client: "pg", // need to npm i pg
    connection: productionConnection,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      min: 2,
      max: 100 // this is to ensure the migration will not time out
    }
  }
};
