const express = require('express');
const cartController = require('../Controllers/cartController');
const router = express.Router();

router.post('/:user_id/:product_id',cartController.addItemsToCart)
router.get('/:user_id',cartController.getCartItems)




module.exports = router;