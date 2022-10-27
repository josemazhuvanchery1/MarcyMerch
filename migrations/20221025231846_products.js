/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('products', (table) => {
      table.increments('id').primary()
      table.string('product_name').notNullable()
      table.decimal('price').notNullable()
      table.integer('quantity').notNullable()
      table.string('image')
      
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('products')
  };
  