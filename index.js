const express = require('express')
const app = express()
const port = 3001

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopping_app');


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


const apiProductRoute = require('./api/routes/product.route')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/products',apiProductRoute)
app.use('/api/categories',apiProductRoute)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})