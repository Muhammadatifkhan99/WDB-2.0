const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const { findOne } = require("./models/user");




//connection to the database
mongoose.connect("mongodb://localhost:27017/authDemo");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
})

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res) => {
    res.send("This is the home page");
})


app.get("/register",(req,res) => {
    res.render("register");
})

app.post("/register", async (req,res) => {
    const { username , password } = req.body;
    const hash = await bcrypt.hash(password,12);
    const user = new User ({
        username,
        password: hash
    })
    await user.save();
    res.redirect("/")
    // res.send(req.body);
})


app.get("/login",(req,res) => {
    res.render("login");
})

app.post("/login", async (req,res) => {
    const { username , password } = req.body;
    const user = await User.findOne({ username });
    const validuser = await bcrypt.compare(password, user.password);
    if(validuser){
        res.send("Welcome");
    } 
    else {
        res.send("TRY AGAIN");
    }

});

app.get("/secret", (req,res) => {
    res.send("This is a secrete! You cannot see me unless you are loggedIn");
})









app.listen("3000",() => {
    console.log("SERVING ON PORT 3000");
})