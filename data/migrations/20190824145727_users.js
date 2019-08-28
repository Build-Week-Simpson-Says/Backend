exports.up = function(knex) {
  return knex.schema
    .createTable("quotes", quotes => {
      quotes
        .increments("id")
        .primary()
        .notNullable();
      quotes.string("quote", 500);
      quotes.string("character", 255);
      quotes.string("episode", 255);
    })
    .createTable("favorites", favorite => {
      favorite.increments("id").primary().notNullable();
      favorite
        .integer("quote_id")
        .references("id")
        .inTable("quotes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      favorite
        .integer("user_favorites")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("users", users => {
      users
        .increments("id")
        .primary()
        .notNullable();

      users
        .string("username", 255)
        .notNullable()
        .unique();
      users.string("password", 255).notNullable();
      users
        .integer("favorites")
        .references("id")
        .inTable("favorites")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      users.string("favoriteChar", 255);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("middle").dropTableIfExists("quotes");
};
