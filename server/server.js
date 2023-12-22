const express = require('express');
require('dotenv').config();
db = require('../database/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')
const morgan = require('morgan');


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/auth', authRoutes);
app.use('/task', taskRoutes);




// Connecting to the database
db.DBConnect() 
const port = process.env.port || 4000;

// Starting the server
app.listen(port, () => {
    console.log(`server is running and listening on port:`, port);
})