require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const logger = require('morgan')


const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

// setup body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
  limit: "8mb",
}));

// Middlewares
app.use(logger('dev'));

// Setup Routes
app.use('/api', require('./routes/router.js'));


// Listen the server
app.listen(PORT, HOST)
console.log(`Server listening on http://${HOST}:${PORT}`)

