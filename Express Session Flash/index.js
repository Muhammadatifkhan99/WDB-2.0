const express = require("express");
const session = require("express-session");
const app = express();

const sessionOptions = {secret:"thisisasecrete", resave: false, saveUninitialized: false }

app.use(session(sessionOptions));

app.get("/viewcount",(req,res) => {
    // console.log(req.session);
    if(req.session.count){
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`);
})

app.listen("3000",()=>{
    console.log("SERVING ON PORT 3000");
})