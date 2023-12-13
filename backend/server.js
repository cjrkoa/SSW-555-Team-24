const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const bcrypt = require('bcryptjs');
const MongoStore = require("connect-mongo");
const LocalStrategy = require("passport-local");
const flash = require("express-flash");
const path = require("path");

const Event = require("./database/models/event");
const Signup = require("./database/models/signup");
const User = require("./database/models/user");

let userRoute = require("./routes/user");

mongoose.set("strictQuery", false);

// Replace with link to our actual DB
const mongoDB = "mongodb+srv://jocampo:juan_SSW555@clusterssw555.yvtizbm.mongodb.net/Events";

const express = require("express"),
       app = express(),
       port = process.env.PORT || 5000,
       cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs");

app.set("views", "../app/views");
app.set("view engine", "jsx");
app.use('/static', express.static('static'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    session({
        secret: "E4CBXv0zf1",
        resave: false,
        store: MongoStore.create({ mongoUrl: mongoDB }),
        saveUninitialized: false
    })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    async function(username, password, done) {
        mongoose.connect(mongoDB);
        await User.findOne({ username: username }).then( async function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));
app.use(bodyParser.json({ extended: true }));

app.use( (req, res, next) => {
    console.log('req.session', req.session);
    next();
});

app.use("/login", userRoute);

app.listen(port, () => console.log("Backend server live on " + port));

app.get("/connection", async (req, res) => {
    try{
        const connection  = await mongoose.connect(mongoDB);
        res.send({message: "Connection Successful"});
    } catch(err){
        res.send(err);
    }
} );

app.get("/", (req, res) => {
    res.render('layout.jsx', {layout: false});
});

app.post('/users', async (req, res) => {
    mongoose.connect(mongoDB);
    console.log('user signup');
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    await User.create({
        username: req.session.username,
        password: req.session.password,
    });
});

app.get("/login", async (req, res) => {
    res.render("signin.jsx");
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}));

app.get("/logout", async (req, res) => {
    req.logout();
    res.redirect("/login");
})

app.post("/newevent", async (req,res) => {
    try{    
        mongoose.connect(mongoDB);
        console.log(req.body);
        let name = req.body.name;
        let date = req.body.date;
        let location = req.body.location;
        let price = req.body.price;
        let category = req.body.category;
        let ages = req.body.ages;
        let language = req.body.language;
        let currency = req.body.currency; 

        await Event.create({
            name : name,
            date : date,
            location : location,
            price : price,
            category : category,
            ages : ages,
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

app.get("/events", async (req, res) => {
    try {
        mongoose.connect(mongoDB);
        const data = await Event.find();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/events:name", async (req, res) => {
    try {
        mongoose.connect(mongoDB);
        console.log(req.body)
        const data = await Event.find(req.body.name);
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = app;