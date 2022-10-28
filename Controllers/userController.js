const pool = require('../dbconfig')
const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')

const getAllUsers = async(req, res)=>{
    const customers = await userModel.getUsersFromDB();
    console.log(customers)
    res.status(200).json(customers)
}

const getSingleUser = async(req,res)=>{
    const id = req.params.id;
    const customer = await userModel.getSingleUserFromDB(id);
    if(customer.length>=1)
        res.status(200).json(customer)
    else 
        res.status(404).send("User does not exist")
}

const addUser = async(req,res)=>{
    const {first_name,last_name, username, email, password} = req.body
    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password,salt)
        const data = await userModel.addUserToDB(first_name,last_name,username,email,hashedPassword)
        res.status(201).json(data)
    }
    catch (err){
        console.log(err)
        res.status(404).json({message:err.detail})
    }
    
}

const findUser = async(req,res)=>{
    const userName = req.body.username
    const user = await userModel.findUserFromDB(userName)
    try{
        if(!user){
            res.status(404).json({message:'user not found'})
        }else{
            if(await bcrypt.compare(req.body.password, user.password)){
                res.status(200).json(user)
            }
            else{
                res.send("wrong password")
            }

        }
    }
    catch {

    }
}



module.exports = {
    getAllUsers,
    getSingleUser,
    addUser,
    findUser
}