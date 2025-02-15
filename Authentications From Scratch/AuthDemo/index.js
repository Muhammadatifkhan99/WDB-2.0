const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const sessions = require("express-session");


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
app.use(sessions({ secret: "notagoodsecrete" }));

const requireLogin = (req,res,next) => {
    if(!req.session.user_id){
        return res.render("login");
    }
    next();
}


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
    req.session.user_id = user._id;
    res.redirect("/")
    // res.send(req.body);
})


app.get("/login",(req,res) => {
    res.render("login");
})

app.post("/login", async (req,res) => {
    const { username , password } = req.body;
    const foundUser = await User.findAndValidate(username,password);
    if(foundUser){
        req.session.user_id = foundUser;
        res.redirect("secret");
    } 
    else {
        res.redirect("/login");
    }

});

app.post("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
})

app.get("/secret",requireLogin, (req,res) => {
    res.render('secret');
})

app.get("/topsecret",requireLogin,(req,res) => {
    res.send("This is the Top Secret of the State");
})









app.listen("3000",() => {
    console.log("SERVING ON PORT 3000");
})