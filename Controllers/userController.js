const pool = require('../dbconfig');
const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');

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
    const checkUserExist = await userModel.findUserFromDB(username)
  
    if(checkUserExist.length>0) res.json({message:"user already exists"})
    else{
        try{
            const salt = await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(password,salt)
            const data = await userModel.addUserToDB(first_name,last_name,username,email,hashedPassword)
            res.status(201).json(data)
        }
        catch (err){
            console.log(err)
            res.status(404).send('server error')
        }
    }
}

const findUser = async(req,res)=>{
    const userName = req.body.username
    const users = await userModel.findUserFromDB(userName)
    try{
        if(users.length===0){
            res.status(404).json({message:'user not found'})
        }else{
            const user = users[0]
            if(await bcrypt.compare(req.body.password, user.password)){
                res.status(200).json(user)
            }
            else{
                res.status(404).json({message:"wrong password"})
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