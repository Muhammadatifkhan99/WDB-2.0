const express = require('express');
const app = express();
const path = require('path');

//app.use code will always run when ever a request is made to this page....the type of request does not matters

//to extract form encoded information we use a middleware 
app.use(express.urlencoded({extended: true}))

//to extract information from json we need another method that can work with json payloads
app.use(express.json());

//set to use the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//array to hold comments to be used to demonstrate routes

const comments = [
    {
        username: 'Todd',
        comment : 'lol, that is so funny'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBio',
        comment: 'Plz delete your account Todd'
    },
    {
        username: 'onlysaywoofwoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req,res) => {
    //we need to pass the comments object to this to have access to it in the template
    res.render('comments/index', {comments});
})

app.get('/comments/new',(req,res) => {
    res.render('comments/new');
})

app.post('/comments', (req,res) => {
    // console.log(req.body);
    const {username, comment} = req.body;
    comments.push({username, comment});
    // res.send("IT WORKED")
    res.redirect('/comments')
})

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