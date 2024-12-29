const express = require("express");
const session = require("express-session");
const app = express();


app.use(session({secret:"thisisasecrete"}));

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