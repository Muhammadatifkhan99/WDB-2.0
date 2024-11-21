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

app.use(morgan("tiny"));


app.use((req,res, next) => {
    //making every request a GET request
    // req.method  = "GET";
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});
//this route will run and then the second route will run only if the request was a GET...for POST this will execute only..
app.use("/dogs",(req,res,next) => {
    console.log("I LOVE DOGS");
    next();
});


//this will run for every single route

//this function is passed to any other function will have the route protected and require a password to be accessed
const verifyPassword = ((req,res,next) => {
    const { password } = req.query;
    if(password === "chickennugget"){
        next();
    } else{
        res.send("YOU NEED A PASSWORD");
        // throw new Error ("Password Required");
    }
})

// app.use((req,res, next) => {
//     // res.send("HIJACKED BY GOVERNMENT");
//     console.log("This is the first middleware");
//     return next();
//     //code after this will execute
//     console.log("This is the code after the next()");
// });
// app.use((req,res, next) => {
//     // res.send("HIJACKED BY GOVERNMENT");
//     console.log("This is the second middleware");
//     return next();
// });
// app.use((req,res, next) => {
//     // res.send("HIJACKED BY GOVERNMENT");
//     console.log("This is the third middleware");
//     return next();
// });

app.get("/", (req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("HOME PAGE");
})
//2nd route
app.get("/dogs", (req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("WOOF WOOF");
})


app.get("/secret",verifyPassword, (req,res,next) => {
    res.send("MY SECRET IS: I love to listen to music when I am in public.");
})

app.get("/errors", (req,res) => {
    chicken.fly();
})

app.use((req,res,next) => {
    res.status(404).send("NOT FOUND");
})


//manaully handling express errors.....using this signature for a middleware 
app.use((err,req,res,next) => {
    console.log("********************");
    console.log("********ERROR*******");
    console.log("********************");
})

app.listen(3000, () => {
    console.log("App is running on localhost:3000");
})