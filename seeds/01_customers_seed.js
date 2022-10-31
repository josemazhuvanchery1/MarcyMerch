/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('customers').del()
  await knex('customers').insert([
    {first_name: 'Aneika',last_name: 'Nantom', username:'aneikaNantom', email:'aneika@gmail.com', password:'1234'},
    {first_name: 'Sumaira',last_name: 'Khan', username:'sumairaKhan', email:'sKhan@gmail.com', password:'1234'},
    {first_name: 'Jose',last_name: 'Maz', username:'joseMathew', email:'jose@gmail.com', password:'1234'}
  ]);
};
