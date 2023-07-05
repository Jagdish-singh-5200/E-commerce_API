// importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const PORT = 4000;

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

// starting the server
app.listen(PORT, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log('Server is up and running on port: ', PORT);
});