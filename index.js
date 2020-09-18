require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


const apiProductRoute = require('./api/routes/product.route')
const apiCategoryRoute = require('./api/routes/category.route')
const apiUserRoute = require('./api/routes/user.route')
app.get('/', (req, res) => {
  res.send('Hello Worldaaa!')
})

app.use('/api/products',apiProductRoute)
app.use('/api/categories',apiCategoryRoute)
app.use('/api/users',apiUserRoute)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})