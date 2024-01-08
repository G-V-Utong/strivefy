// Import necessary modules
const express = require('express');
require('dotenv').config();
const db = require('../database/db');  // Import the database connection module
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');  // Import authentication routes
const taskRoutes = require('./routes/taskRoutes');  // Import task routes
const morgan = require('morgan');  // Import morgan for logging
const path = require('path');

// Create an Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Enable build-ready react app in public folder
app.use(express.static(path.join(__dirname + "public")))

// Parse JSON requests
app.use(express.json());

// Set up logging using Morgan in development mode
app.use(morgan('dev'));

// Define routes for authentication and task-related operations
app.use('/auth', authRoutes);
app.use('/task', taskRoutes);

// Connect to the database
db.DBConnect();

// Define the port for the server to listen on
const port = process.env.PORT || 4000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running and listening on port:`, port);
});
