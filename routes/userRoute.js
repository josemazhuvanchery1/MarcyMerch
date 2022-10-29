const express =require('express')
const userControl = require('../Controllers/userController')
const router = express.Router()
const cartController = require('../Controllers/cartController');


router.get('/',userControl.getAllUsers )
router.get('/:id', userControl.getSingleUser)
router.post('/register', userControl.addUser)
router.post('/login', userControl.findUser)
router.post('/products/:id', cartController.addItemsToCart);


router.all('*', (req,res)=>{
    res.send('This path does not exist')
});

module.exports = router;