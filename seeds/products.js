/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {product_name: 'Fancy Grey Hoodie', price: 60.00, quantity: 3, image:"../startbootstrap-shop-homepage-gh-pages/assets/grey_thumbnail.png"},
    {product_name: 'Fall Green Sweatshirt', price: 56.00, quantity: 3, image:"../startbootstrap-shop-homepage-gh-pages/assets/greensweat.jpg"},
    {product_name: 'Stripe RedSweatpants', price: 70.00, quantity: 3, image:"../startbootstrap-shop-homepage-gh-pages/assets/stripehood.jpg"},
    {product_name: 'White Bagpack', price: 56.00, quantity: 3, image:"../startbootstrap-shop-homepage-gh-pages/assets/WhiteBag.jpg"},
    {product_name: 'Warm Purple Bagpack', price: 56.00, quantity: 3, image:"../startbootstrap-shop-homepage-gh-pages/assets/purpleBag_thumbnail.png"},
    {product_name: 'Everyday Tote Bag', price: 56.00, quantity: 3, image:"../startbootstrap-shop-homepage-gh-pages/assets/ToteBag_thumbnail.png"},
    {product_name: 'Orange Beanie', price: 56.00, quantity: 3, image:"../startbootstrap-shop-homepage-gh-pages/assets/Beenie_thumbnail.png"},
    {product_name: 'Yellow Beanie', price: 56.00, quantity: 3, image:"../startbootstrap-shop-homepage-gh-pages/assets/yellowB.jpg"}
  ]);
  
};
