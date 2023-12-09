const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const event = new Schema({
    name: String,
    date : Date,
    location: String,
    price: Number,
    category: String,
    ages: String,
    language: String,
    currency: String
}, { collection: "events" });

const Event = mongoose.model("Event", event);

module.exports = Event;