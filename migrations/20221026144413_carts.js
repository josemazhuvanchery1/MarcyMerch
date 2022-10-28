/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
return knex.schema.createTable('carts', table => {
    table.increments('order_id').primary()
    table.integer('product_id').notNullable()
    table.integer('customer_id').notNullable();
     table.foreign('product_id').references('id').inTable('products')
     table.foreign('customer_id').references('user_id').inTable('customers')
})
 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('carts')
};
