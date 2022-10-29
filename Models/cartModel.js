const pool = require('../dbconfig');


const fillCart = (itemId) => {
    return pool.query('INSERT INTO carts (order_id, product_id, customer_id) VALUES (3, $1, 2)', [itemId])
};


module.exports = {fillCart};