exports.up = function(knex) {
  return knex.schema
    .createTable("quotes", quotes => {
      quotes.uuid("id").primary();
      quotes.string("quote", 500);
      quotes.string("character", 255);
      quotes.string("episode", 255);
    })
    .createTable("users", users => {
      users.uuid("id").primary();

      users
        .string("username", 255)
        .notNullable()
        .unique();
      users.string("password", 255).notNullable();
      users
        .integer("favorites")
        .references("id")
        .inTable("quotes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("quotes");
};
