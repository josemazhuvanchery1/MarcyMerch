const pool = require('../dbconfig');


const fillCart = (itemId) => {
    return pool.query('INSERT INTO carts (product_id, customer_id) VALUES ($1, 2) RETURNING *', [itemId])
};


module.exports = {fillCart};