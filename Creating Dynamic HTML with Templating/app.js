const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send("HI")
    res.render('home.ejs')
})

app.listen(3000, () =>{
    console.log("Listeing on port 3000")
})