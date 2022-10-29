// server
const express = require('express');
const app = express();
let cors = require('cors');

// require
const productControl = require('./Controllers/productscontrollers');
const userRoute = require('./routes/userRoute.js');
const cartRoute = require('./routes/cartRoute.js');

// middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

// products routes
app.get('/products', productControl.getProducts);


//user routes
app.use('/customers', userRoute);
//app.get('/customers',userControl.getAllUsers )
app.get('/customers', async(req, res)=>{
    const customers = await pool.query('SELECT * FROM customers').then(results => {return results.rows})
    console.log(customers)
    res.status(200).json(customers)
});
app.use('/customers/:id', userRoute);
app.use('/customers/register', userRoute);
app.use('/cutomers/login', userRoute);

// all other paths
app.all('*', (req, res)=>{
    res.send('Path does not exist')
});

// port listener
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});
