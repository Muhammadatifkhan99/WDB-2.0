const express = require("express");
const app = express();
const morgan = require("morgan");


//app.use() allow us to run code on every single request to the server....
//express.static serve static files
//express.json tell express to parse the body as a json body
//express.urlendcoded tell express to execute this code on every single request
// app.use(morgan("tiny"));
// app.use(morgan("common"));
// app.use(morgan("dev"));


app.use((req,res, next) => {
    // res.send("HIJACKED BY GOVERNMENT");
    console.log("This is the first middleware");
    return next();
    //code after this will execute
    console.log("This is the code after the next()");
});
app.use((req,res, next) => {
    // res.send("HIJACKED BY GOVERNMENT");
    console.log("This is the second middleware");
    return next();
});
app.use((req,res, next) => {
    // res.send("HIJACKED BY GOVERNMENT");
    console.log("This is the third middleware");
    return next();
});

app.get("/", (req,res) => {
    res.send("HOME PAGE");
})

app.get("/dogs", (req,res) => {
    res.send("WOOF WOOF");
})

app.listen(3000, () => {
    console.log("App is running on localhost:3000");
})