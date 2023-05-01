// necessary routers
const routers = require("./Routers/Routes");
require("./Routers/Mongodb");


// Require necessary packages
const express = require("express");



// Create express app
const app = express();


app.use(express.json());
app.use("/data", routers);


// Start server
app.listen(6000, () => {
    console.log('Server started on port 6000');
});
