const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
// const dotenv = require('dotenv');
// const path = require('path')

const errorMiddleware = require('./middlewares/errors')


app.use(express.json());



// Import all routes
const products = require('./routes/product');


app.use('/api/v1', products)



// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app