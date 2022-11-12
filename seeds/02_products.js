/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {product_name: 'Dust Brown Hoodie', price: 40.00, quantity: 3, image:"../Products_files/assets/product1.png"},
    {product_name: 'Fall Green Sweatshirt', price: 36.00, quantity: 3, image:"../Products_files/assets/greensweat.jpg"},
    {product_name: 'Grey Hoodie', price: 50.00, quantity: 3, image:"../Products_files/assets/Product.png"},
    {product_name: 'White Backpack', price: 56.00, quantity: 3, image:"../Products_files/assets/WhiteBag.jpg"},
    {product_name: 'Warm Purple Backpack', price: 56.00, quantity: 3, image:"../Products_files/assets/purpleBag_thumbnail.png"},
    {product_name: 'Everyday Tote Bag', price: 28.00, quantity: 3, image:"../Products_files/assets/ToteBag_thumbnail.png"},
    {product_name: 'Loose Fitted Orange Beanie', price: 20.00, quantity: 3, image:"../Products_files/assets/Beenie_thumbnail.png"},
    {product_name: 'Fitted Yellow Beanie', price: 20.00, quantity: 3, image:"../Products_files/assets/yellowB.jpg"}
  ]);
  
};
