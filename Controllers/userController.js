const pool = require('../dbconfig')
const userModel = require('../Models/userModel')
//const bcrypt = require('bcrypt')

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
    const {firstName,lastName, username, email, password} = req.body
    // try{
    //     const salt = await bcrypt.genSalt()
    // }
    // catch{

    // }
    const data = await userModel.addUserToDB(firstName,lastName,username,email,password)
    res.status(201).json(data)
}



module.exports = {
    getAllUsers,
    getSingleUser,
    addUser
}