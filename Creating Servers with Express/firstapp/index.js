const express = require("express");

const app = express();
// console.dir(app);


//on every request we have access to two parameters in the use() function 
app.use((req,res) => {
    console.log("WE GOT A NEW REQUEST")
    // console.dir(req);
    //res.send() generate and sends an http response
    // res.send("HELLO WE GOT YOU REQUEST!! THIS IS A RESPONSE!!")
    // const color = {
    //     color: 'red',
    //     age: '23'
    // }
    // res.send(color);
    res.send("<h1>Hello and Welcome</h1>")
})


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})