const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');
uuid();



app.use(methodOverride('_method'));

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
    {   id: uuid(),
        username: 'Todd',
        comment : 'lol, that is so funny'
    },
    {   id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {   id: uuid(),
        username: 'Sk8erBio',
        comment: 'Plz delete your account Todd'
    },
    {   id: uuid(),
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

app.get('/comments/:id', (req,res) => {
    const { id } = req.params;
    //we nolonger need to parse the int since it already a string value
    // const comment = comments.find(c => c.id === parseInt(id));
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

// app.patch('/comments/:id', (req,res) => {
//     const { id } = req.params;
//     console.log(req.body.comment)
//     res.send("All Good");
// })



app.get('/comments/:id/edit', (req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

app.patch('/comments/:id', (req,res) => {
    // res.send("Updating something");
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText
    res.redirect('/comments');
    // console.log(req.body.comment);
    // res.send("All Good For Now");
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