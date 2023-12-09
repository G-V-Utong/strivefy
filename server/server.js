const express = require('express');
require('dotenv').config()

const app = express();
const port = process.env.port || 4000;

app.listen(port, () => {
    console.log(`server is running and listening on port:`, port);
})