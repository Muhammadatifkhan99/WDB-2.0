const express = require('express');
const app = express();

//app.use code will always run when ever a request is made to this page....the type of request does not matters

//to extract form encoded information we use a middleware 
app.use(express.urlencoded({extended: true}))

//to extract information from json we need another method that can work with json payloads
app.use(express.json());

// on the get request we have the req.query because get requests are usally a query strings
app.get('/tacos', (req,res) => {
    res.send("GET /tacos Request");
})
//on the post request we have the req.body
app.post('/tacos', (req,res) => {
    console.log(req.body)
    const {meat, qty} = req.body; 
    res.send(`OK here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000")
})