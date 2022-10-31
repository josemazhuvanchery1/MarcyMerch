/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('carts').del()
  await knex('carts').insert([
    { product_id:1, customer_id:1},
    {product_id:2, customer_id:2}
  ]);

};
