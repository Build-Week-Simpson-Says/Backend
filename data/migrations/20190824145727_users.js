exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.uuid("id").primary();

      users
        .string("username", 255)
        .notNullable()
        .unique();
      users.string("password", 255).notNullable();
      users
        .integer("quotes_id")
        .references("id")
        .inTable("quotes")
        .notNullable()
        .onDelete("cascade");
    })
    .createTable("quotes", quote => {
      quotes.uuid("id").primary();
      quotes.string("quote", 500);
      quotes.character("character", 255);
      quotes.episode("episode", 255);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
