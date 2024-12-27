const express = require("express");
const app = express();


app.get("/greet",(req,res) => {
    res.send("Hey there");
})

app.get("/setname",(req,res) => {
    res.cookie("name", "Stevie Chicks");
    res.cookie("animal", "harlequine shrimp");
    res.send("greeting");
})



app.listen(3000, () =>{
    console.log("SERVING ON PORT 3000");
})