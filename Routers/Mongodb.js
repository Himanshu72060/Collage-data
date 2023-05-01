// Set up database mongodb connection...
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://collagedata:collagedata1@cluster0.ajsewst.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    .then(() => {
        console.log("Mongodb connected done......");
    })
    .catch((err) => {
        console.log("Not connected", err);
    });