const pool = require('../dbconfig');


const fillCart = async (productId,userId) => {
    await pool.query('INSERT INTO carts (product_id, customer_id) VALUES ($1, $2)', [productId,userId])
    //return await pool.query('SELECT * FROM carts JOIN products ON carts.product_id = products.id WHERE carts.customer_id = $1',[userId]).then(results => results.rows)
};

async function getCart(userId){
    return await pool.query('SELECT * FROM carts JOIN products ON carts.product_id = products.id WHERE carts.customer_id = $1',[userId]).then(results => results.rows)
}


module.exports = {
    fillCart,
    getCart
};