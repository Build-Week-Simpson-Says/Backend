exports.up = function(knex) {
  return knex.schema
    
    .createTable('quotes', quotes => {
      // the import script is set up to continue after the largest id inserted
      // so it is safe to make it auto-increment
      quotes.increments();
      // the are quotes longer than 500 they fail when importing into Postgres
      quotes.string('quote', 4000);
      quotes.string('character', 255); // this has null values for some records
      quotes.integer('episode', 255); // this is always a number or null
    })
    .createTable('users', users => {
      users.increments('id');
      users
        .string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255).notNullable();
      users.string('favChar', 255);
      users.string('favorites', 255);
    })
    .createTable('favorites', favorites => {
      favorites.increments('id');
      favorites
        .integer('user_favorites')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      favorites
        .integer('quote_id')
        .unsigned()
        .references('id')
        .inTable('quotes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};
exports.down = function(knex) {
  // reordered the tables to respect the Foreign Keys
  return knex.schema
    .dropTableIfExists('favorites')
    .dropTableIfExists('users')
    .dropTableIfExists('quotes');
};
