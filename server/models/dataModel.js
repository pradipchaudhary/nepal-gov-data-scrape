const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    title: String,
    imgUrl: String,
    number: Number,
});

module.exports = mongoose.model("Data", DataSchema);
