const pool = require('../dbconfig.js');
const cartModel = require('../Models/cartModel');

const addItemsToCart = async(req, res) => {
    const itemId = req.params.id;
    console.log(itemId);
    if(!itemId){
        res.status(404).json("Can't add item to cart, please try again or continue shopping.");
    } else {
        const items = await cartModel.fillCart(itemId);
        res.send(items);
    }
}

module.exports = {addItemsToCart};