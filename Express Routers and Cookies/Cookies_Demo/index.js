const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("thisismysecret"));


app.get("/greet",(req,res) => {
    const { name = "No-Name" } = req.cookies;
    res.send(`Hey there ${name}`);
})

app.get("/setname",(req,res) => {
    res.cookie("name", "Stevie Chicks");
    res.cookie("animal", "harlequine shrimp");
    res.send("greeting");
});

app.get("/getsignedcookies",(req,res) => {
    res.cookie("fruit","graph",{ signed: true });
    res.send("Cookie Signed Successfully");
})

app.get("/verifyfruit", (req,res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})
app.listen(3000, () =>{
    console.log("SERVING ON PORT 3000");
})