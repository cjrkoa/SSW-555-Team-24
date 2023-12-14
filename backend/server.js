const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const bcrypt = require('bcryptjs');
const MongoStore = require("connect-mongo");
const LocalStrategy = require("passport-local");
const flash = require("express-flash");

const Event = require("./database/models/event");
const Signup = require("./database/models/signup");
const User = require("./database/models/user");

let userRoute = require("./routes/user");
let authRouter = require("./routes/auth");

mongoose.set("strictQuery", false);

// Replace with link to our actual DB
const mongoDB = "mongodb+srv://jocampo:juan_SSW555@clusterssw555.yvtizbm.mongodb.net/Events";

const express = require("express"),
       app = express(),
       port = process.env.PORT || 5000,
       cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs");

const router = express.Router();

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
app.use("/", authRouter);

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

app.post(
    "/login",
    (req, res, next) => {
        passport.authenticate("local", { session: false }, (err, user) => {
            try{ res.send(user.username) }
            catch{ res.send(err) }
        })(req, res, next);
    }
);

app.get("/logout", async (req, res) => {
    req.logout();
    window.location.href = "/signin";
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