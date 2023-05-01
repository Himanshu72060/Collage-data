// Student data Schema

// Require necessary packages
const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const Model = mongoose.model;

const teacherdata = new Schema({
    FirstName: { type: String, required: false },
    LastName: { type: String, required: true },
    Expirence: { type: String, required: true },
    Qualifications: { type: String, required: true }
});

// Define models
module.exports = Model("teacherdata", teacherdata);