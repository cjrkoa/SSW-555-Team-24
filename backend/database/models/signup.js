const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const signup = new Schema({
    email: String,
    eventName: String, 
}, { collection: "signup" });

const Signup = mongoose.model("Signup", signup);

module.exports = Signup;