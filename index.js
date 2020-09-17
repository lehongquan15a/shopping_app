const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopping_app');

const apiProductRoute = require('./api/routes/product.route')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/products',apiProductRoute)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})