/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {product_name: 'Hoodie', price: 60.00, quantity: 3},
    {product_name: 'Sweatshirt', price: 56.00, quantity: 3},
    {product_name: 'Sweatpants', price: 70.00, quantity: 3}
  ]);
};
