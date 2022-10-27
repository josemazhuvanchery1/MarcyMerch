const express =require('express')
const userControl = require('../Controllers/userController')
const router = express.Router()

router.get('/',userControl.getAllUsers )
router.get('/:id', userControl.getSingleUser)
router.post('/register', userControl.addUser)

router.all('*', (req,res)=>{
    res.send('THis path does not exist')
})
module.exports = router