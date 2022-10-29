const pool = require('../dbconfig');

function getUsersFromDB(){
    return  pool.query('SELECT * FROM customers').then(results => {return results.rows})
}

function getSingleUserFromDB(id){
    return pool.query('SELECT * FROM customers WHERE user_id = $1',[id]).then(results => {
        return results.rows
    })
}

function addUserToDB(...args){
    return pool.query('INSERT INTO customers (first_name,last_name,username,email,password) VALUES ($1, $2, $3, $4, $5) RETURNING *', args).then(results => {
        return results.rows[0]
    })
}

function findUserFromDB(username){
    return pool.query('SELECT * FROM customers WHERE username = $1',[username]).then(results => {
        return results.rows[0]
    })
}
module.exports ={
    getUsersFromDB,
    getSingleUserFromDB,
    addUserToDB,
    findUserFromDB
}