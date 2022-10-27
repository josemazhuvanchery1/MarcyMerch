const express = require('express');
const app = express();
let cors = require('cors')
app.use(cors())
const pool = require('./dbconfig.js')
const productControl = require('./Controllers/productscontrollers')


app.use(express.json())

const PORT = process.env.PORT || 8000;


//app.get('/products',productscotrollers.getProducts)

app.get('/customers', async(req, res)=>{
    const customers = await pool.query('SELECT * FROM customers').then(results => {return results.rows})
    console.log(customers)
    res.status(200).json(customers)
})

app.get('/products',productControl.getProducts)


app.get('/customers/:id', async(req,res)=>{
    const id = req.params.id;
    const customer = await pool.query('SELECT * FROM customers WHERE user_id = $1',[id]).then(results => {
        return results.rows
    })
    console.log(customer.length)
    if(customer.length>=1)
        res.status(200).json(customer)
    else 
        res.status(404).send("User does not exist")
})
app.post('/customers', async(req,res)=>{
    const {firstName,lastName, username, email, password} = req.body
    console.log({firstName,lastName, username, email, password})
    const data = await pool.query('INSERT INTO customers (first_name,last_name,username,email,password) VALUES ($1, $2, $3, $4, $5) RETURNING *', [firstName,lastName,username,email,password]).then(results => {
        return results.rows
    })
    console.log(data)
    res.end()
})
// app.post('/customers/register', async(req,res)=>{
//     const {firstName,lastName, username, email, password} = req.body
// })

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
