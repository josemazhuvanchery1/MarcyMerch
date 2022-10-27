/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('carts', (table) => {
        table.increments('order_id').primary()
        // table.foreign('product_id').references('products.product_id')
        // table.foreign('customer_id').references('customer.customer_id')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('carts');
};
