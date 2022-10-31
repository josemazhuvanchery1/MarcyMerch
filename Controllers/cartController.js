
const cartModel = require('../Models/cartModel');

const addItemsToCart = async(req, res) => {
    const productId = req.params.product_id;
    const userId = req.params.user_id

    if(!productId){
        res.status(404).json("Can't add item to cart, please try again or continue shopping.");
    } else {
        const items = await cartModel.fillCart(productId,userId);
        res.send(items);
    }
}

const getCartItems = async(req,res) =>{
    const userId = req.params.user_id
    const items = await cartModel.getCart(userId);
    res.json({items})
}
module.exports = {
    addItemsToCart,
    getCartItems
}