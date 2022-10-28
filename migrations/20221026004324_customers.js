/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("customers", table => {
        table.increments('user_id').primary()
        table.string("first_name").notNullable()
        table.string("last_name").notNullable()
        table.string("username").notNullable().unique()
        table.string("email").notNullable()
        table.string("password").notNullable()
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("customers")
};
