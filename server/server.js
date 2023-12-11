const express = require('express');
require('dotenv').config();
db = require('../database/db')

const app = express();

// Connecting to the database
db.DBConnect() 
const port = process.env.port || 4000;

// Starting the server
app.listen(port, () => {
    console.log(`server is running and listening on port:`, port);
})