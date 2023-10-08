const mongoose = require("mongoose")
let schema = new mongoose.Schema({
    name: String,
    gender: String,
    class: String,
    section: String,
    maths: Number,
    science: Number,
    english: Number
})
let student = mongoose.model("student", schema)
module.exports = student