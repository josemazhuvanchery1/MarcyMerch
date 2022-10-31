const pool = require('../dbconfig');

function getProductsFromBd(){
    return  pool.query('SELECT * FROM products').then(results => {return results.rows})
}

// function getOneProduct(id){
//    return pool.query('SELECT * FROM products WHERE id = $1',[id]).then(results =>  {return results.rows[0]}) 
// }





module.exports = {
     getProductsFromBd
    //  getOneProduct
}