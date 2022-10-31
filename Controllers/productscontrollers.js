const {Pool} = require('pg')
const pool = require('../dbconfig.js')
const productModel = require('../Models/productsmodel');

const getProducts = async(req,res) => {
    const products = await productModel.getProductsFromBd()
    console.log(products)
    res.status(200).json(products)
}

// const getSingleProduct =  async(req,res) => {
//     const id = req.params.id;
//     const get1Product = await productModel.get1Product(id)
//   if(get1Product){
//      res.status(200).json(get1Product)
//   } else {
//     res.sendStatus(404)
//   } 
// }

// const getSingleProduct = async (req, res) => {
//     const id = req.params.id;
//     console.log(id)
//     const oneProduct = await productModel.getOneProduct(id)
//     console.log(oneProduct)
//     res.status(200).json(oneProduct)
// }



module.exports = {
    getProducts
    //  getSingleProduct
}
