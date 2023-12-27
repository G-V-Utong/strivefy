// Importing necessary modules
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from a .env file

// Function for connecting to the MongoDB database
const DBConnect = () => {
    // Establishing a connection to MongoDB using Mongoose
    mongoose.connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Event handling for connection success
    mongoose.connection.on("connected", () => {
        console.log("Connection to the database is successful");
    });

    // Event handling for connection error
    mongoose.connection.on("error", (err) => {
        console.log("Connection to the database failed", err);
    });

    // Event handling for disconnection
    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected');
    });

    // Handling the shutdown of the MongoDB connection when the Node.js process is terminated
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('MongoDB connection closed due to app termination');
            process.exit(0);
        });
    });
};

// Exporting the DBConnect function for use in other modules
module.exports = { DBConnect };
