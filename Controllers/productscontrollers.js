const {Pool} = require('pg')

const getProducts = async(req,res) => {
    const products = await pool.query('SELECT * FROM products').then(results => {return results.rows})
    console.log(getProducts)
    res.status(200).json(products)
}

module.exports = {
    getProducts:getProducts
}
