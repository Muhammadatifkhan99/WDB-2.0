const express = require('express');
const app = express();
//to execute this file and render views we need the path module and for that we use the __dirname 
//which refers to the place where this current file lives..
const path = require('path');
//requiring a file
const redditData = require('./data.json');
const { subscribe } = require('diagnostics_channel');
console.log(redditData);


app.use(express.static('public'));
//without this the cssfiles/static files wan't be served while executing them from different directory
app.use(express.static(path.join(__dirname,'public')));


app.set('view engine', 'ejs');
//this code helps to run this file from anywhere becose we have set the correct path for the views.

app.set('views', path.join(__dirname,'/views'));

app.get('/', (req, res) => {
    // res.send("HI")
    //we can remove the .ejs from the file,,because once we set the view engine to ejs no need 
    //to write the extension with it then
    // res.render('home.ejs'); //both are equal
    res.render('home');
})
app.get('/cats', (req,res) => {
    const cats = [
        'Blue', 'Wineston', 'Rocket', 'Monte', 'Stephenie'
    ]
    res.render('cats', {cats})
})

app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    console.log(data);
    // res.render('subreddit', {subreddit})
    if(data) {
        res.render('subreddit', {...data});
    } else {
        res.render('notfound', {subreddit})
    }
   
})

app.get('/random',(req,res) => {
    let num = Math.floor(Math.random() * 10) + 1;
    //render can take in two perameters, the second one is an object and it's a key value pair
    // res.render('random', {rand: num});
    res.render('random', {num});
})

app.listen(3000, () =>{
    console.log("Listeing on port 3000")
})