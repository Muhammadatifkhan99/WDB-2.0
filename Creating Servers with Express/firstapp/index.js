const express = require("express");

const app = express();



//=======================================================================================
//=======================================================================================
//                          Creating our first server with express
//=======================================================================================
//=======================================================================================

// console.dir(app);

//on every request we have access to two parameters in the use() function 
// app.use((req,res) => {
//     console.log("WE GOT A NEW REQUEST")
    // console.dir(req);
    //res.send() generate and sends an http response
    // res.send("HELLO WE GOT YOU REQUEST!! THIS IS A RESPONSE!!")
    // const color = {
    //     color: 'red',
    //     age: '23'
    // }
    // res.send(color);
//     res.send("<h1>Hello and Welcome</h1>")
// })


// app.listen(3000, () => {
//     console.log("LISTENING ON PORT 3000")
// })

//=======================================================================================
//=======================================================================================
//                          Routing Basics
//=======================================================================================
//=======================================================================================

app.get('/',(req,res) => {
    console.log("HOME");
    res.send("This is the homepage");
})
app.post('/cats', (req,res) => {
    res.send("This is a post request different then the get request")
})

app.get('/cats', (req,res) => {
    console.log("Cat Requested");
    res.send("Cats");
})

app.get('/dogs', (req,res) => {
    console.log("Dogs Reqested");
    res.send("Dogs");
})

app.get('/r/:subreddit', (req,res) => {
    const {subreddit } = req.params;
    console.log(req.params);
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})
app.get('/r/:subreddit/:postID', (req,res) => {
    const {subreddit, postID} = req.params;
    console.log(req.params);
    res.send(`<h1>Viewing the PostID:${postID} on the ${subreddit} subreddit</h1>`)
})

app.get('/search',(req,res) => {
    console.log(req.query);
    const {q} = req.query;
    if(!q){
        res.send("NOTHING FOUND IF NOTHING SEARCHED")
    }
    res.send(` <h1>Search results for: ${q}</h1>`);
})

//this method needs to be at the end of the other get() method otherwise it win everytime
app.get('*', (req,res) => {
    res.send("This path is not availale sorry for that");
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})


//=======================================================================================
//=======================================================================================
//                          Routing Basics
//=======================================================================================
//=======================================================================================


//=======================================================================================
//=======================================================================================
//                          Routing Basics
//=======================================================================================
//=======================================================================================

//=======================================================================================
//=======================================================================================
//                          Routing Basics
//=======================================================================================
//=======================================================================================

//=======================================================================================
//=======================================================================================
//                          Routing Basics
//=======================================================================================
//=======================================================================================


