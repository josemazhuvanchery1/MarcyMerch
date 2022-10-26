const express = require('express');
const app = express();
let cors = require('cors')
app.use(cors())
const {Pool} = require('pg')
const pool = require('./dbconfig.js')

app.use(express.json())

const PORT = process.env.PORT || 8000;


app.get('/products',productscotrollers.getProducts)


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
