const express = require('express');
const app = express();
let cors = require('cors')
app.use(cors())
const productControl = require('./Controllers/productscontrollers')
const userRoute = require('./routes/userRoute')



app.use(express.json())

const PORT = process.env.PORT || 8000;

app.get('/products',productControl.getProducts)
//user routes
app.use('/customers', userRoute)
//app.get('/customers',userControl.getAllUsers )

app.post('/products/:id', )

app.get('/customers', async(req, res)=>{
    const customers = await pool.query('SELECT * FROM customers').then(results => {return results.rows})
    console.log(customers)
    res.status(200).json(customers)
})
app.use('/customers/:id', userRoute)
app.use('/customers/register', userRoute)
app.use('/cutomers/login', userRoute)

app.all('*', (req, res)=>{
    res.send('Path does not exist')
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
