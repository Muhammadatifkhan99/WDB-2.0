const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const product = require("./models/product");

mongoose.connect("mongodb://localhost:27017/farmStand")
    .then(() => {
        console.log("CONNECTION OPEN");
        //we donot need to nest our code here becasue mongoose do operation buffering allowing us to use
        //the models immediatly with out having to wait of the mongoose to be connected
        //
    })
    .catch(err => {
        console.log("ERROR");
        console.log(err);
})


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//adding a basic route

app.get("/dog", (req,res) => {
    res.send("WOOF");
})








app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
})