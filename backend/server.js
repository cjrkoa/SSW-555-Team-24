import { MongoClient, ServerApiVersion } from 'mongodb';
//import { config } from 'dotenv';
import express from 'express';
//const mongoose = require("mongoose");

//mongoose.set("strictQuery", false);
//config();

var password = encodeURIComponent("GtP_6rF%35Af3yG39");
const uri = `mongodb://croddy:${password}@sharevent.zqppojj.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

//attempt 1
/*async function connectToCluster(uri){
    let mongoClient;

    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}

export async function executeStudentCrudOperations() {
    let mongoClient;
    
    try {
        mongoClient = await connectToCluster(mongoDB);
    } finally {
        await mongoClient.close();
    }
 }

const event = {
    date : Date,
    price: Number,
    category: String,
    type: String,
    language: String,
    currency: String
};*/


/*const express = require("express"),
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

});*/

//await executeStudentCrudOperations();
await run();