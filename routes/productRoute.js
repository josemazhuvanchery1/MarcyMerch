const express = require('express')
const productControl = require('../Controllers/productsControllers')
const router = express.Router()


router.get('/products', productControl.getProducts);
// router.get('/:id', productControl.getSingleProduct)


module.exports = router;