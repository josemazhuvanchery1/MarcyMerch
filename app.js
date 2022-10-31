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
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

// middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;


//user routes
app.use('/customers', userRoute);
// products routes
app.use('/products', productRoute);


app.get('/products/:id', async(req,res) => {
    const id = req.params.id;
    const get1products = await pool.query('SELECT * FROM products WHERE id = $1',[id]).then(results =>  {return results.rows[0]})
  if(get1products){
     res.status(200).json(get1products)
  } else {
    res.sendStatus(404)
  } 
});

//stripe

app.post('/create-checkout-session', async (req, res)=>{
  let storeItems = req.body.productArrId;
  console.log(storeItems)
  
  try{
    
   
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: storeItems.map( product => {
        return {
          price_data:{
            currency: 'usd',
            product_data:{
              name: product.name
            },
            unit_amount: product.price*100
          },
          quantity: 1
        }
      }),
      success_url: `${process.env.SERVER_URL}/success.html`,
      cancel_url: `${process.env.SERVER_URL}/cancel.html`
    })
    res.json({url: session.url})
  }
  catch (e){
    res.status(500).json({error: e.message})
  }
})




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
