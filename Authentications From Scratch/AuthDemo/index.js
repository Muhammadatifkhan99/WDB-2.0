const express = require("express");
const app = express();

const user = require("./models/user");

app.set("view engine", "ejs");
app.set("views", "views");


app.get("/register",(req,res) => {
    res.render("register");
})


app.get("/secret", (req,res) => {
    res.send("This is a secrete! You cannot see me unless you are loggedIn");
})









app.listen("3000",() => {
    console.log("SERVING ON PORT 3000");
})