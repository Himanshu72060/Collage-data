// Student data Schema

// Require necessary packages
const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const Model = mongoose.model;

const studentdata = new Schema({
    FirstName: { type: String, required: false },
    LastName: { type: String, required: true },
    Age: { type: Number, require: true },
    AdmisionYear: { type: Number, required: true },
    CurrentYear: { type: Number, required: true },
    Course: { type: String },
    RollNumber: { type: Number, require: true },
    FatherName: { type: String, require: true },
    MotherName: { type: String, require: true }
});

// Define models
module.exports = Model("studentdata", studentdata);