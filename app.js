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


//user routes
app.use('/customers', userRoute);
// products routes
app.get('/products', productControl.getProducts);


//cart routes
app.use('/carts', cartRoute)

// all other paths
app.all('*', (req, res)=>{
    res.send('Path does not exist')
});

// port listener
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});
