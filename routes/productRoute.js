const express = require('express')
const productControl = require('../Controllers/productscontrollers')
const router = express.Router()


router.get('/', productControl.getProducts);
// router.get('/:id', productControl.getSingleProduct)


module.exports = router;