// server
const express = require('express');
const app = express();
let cors = require('cors');
const pool = require('./dbconfig')

// require
const productRoute = require('./routes/productRoute.js');
const userRoute = require('./routes/userRoute.js');
const cartRoute = require('./routes/cartRoute.js');
const { query } = require('express');

// middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;


//user routes
app.use('/customers', userRoute);
// products routes
app.get('/products', productRoute);


app.get('/products/:id', async(req,res) => {
    const id = req.params.id;
    const get1products = await pool.query('SELECT * FROM products WHERE id = $1',[id]).then(results =>  {return results.rows[0]})
  if(get1products){
     res.status(200).json(get1products)
  } else {
    res.sendStatus(404)
  } 
});







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
