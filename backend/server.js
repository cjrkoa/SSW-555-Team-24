const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// Replace with link to our actual DB
const mongoDB = "mongodb+srv://jocampo:juan_SSW555@clusterssw555.yvtizbm.mongodb.net/Events";

const Schema = mongoose.Schema;
const event = new Schema({
    date : Date,
    price: Number,
    category: String,
    type: String,
    language: String,
    currency: String
});

const Event = mongoose.model("Event", event);


const express = require("express"),
       app = express(),
       port = process.env.PORT || 5000,
       cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs");


app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
    res.send({ message: "Connected to Backend server!" });
});

app.get("/connection", async (req, res) => {
    try{
        const connection  = await mongoose.connect(mongoDB);
        res.send({message: "Connection Successful"});
    } catch(err){
        res.send(err);
    }
} );

app.post("/newevent", async (req,res) => {
    try{    
        mongoose.connect(mongoDB);
        console.log(req.body);
        let date = req.body.date;
        let price = req.body.price;
        let category = req.body.category;
        let type = req.body.type;
        let language = req.body.language;
        let currency = req.body.currency;

        await Event.create({
            date : date,
            price : price,
            category : category,
            type : type,
            language : language,
            currency : currency
        });
        console.log("Event created")
        res.send({message: "Success"})
    } catch (err){
        console.log(err)
        res.send(err)
    }

});