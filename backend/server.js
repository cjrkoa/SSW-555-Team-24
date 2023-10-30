
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// Replace with link to our actual DB
const mongoDB = "mongodb://";

async function connect(){
    try{
        const connection  = await mongoose.connect(mongoDB);
        return connection;
    } catch(err){
        return err;
    }
}

const Schema = mongoose.Schema;
const event = new Schema({
    date : Date,
    price: Number,
    category: String,
    type: String,
    language: String,
    currency: String
});


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

app.put("/newevent", async (req,res) => {
    try{    
        let date = req.body.jsonObject.date;
        let price = req.body.jsonObject.price;
        let category = req.body.jsonObject.category;
        let type = req.body.jsonObject.type;
        let language = req.body.jsonObject.language;
        let currency = req.body.jsonObject.currency;

        await event.create({
            date : date,
            price : price,
            category : category,
            type : type,
            language : language,
            currency : currency
        });
        res.send({message: "Success"})
    } catch (err){
        res.send(err)
    }

});

