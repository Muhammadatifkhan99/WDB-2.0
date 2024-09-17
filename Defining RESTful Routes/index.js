const express = require('express');
const app = express();

app.get('/tacos', (req,res) => {
    res.send("GET /tacos Request");
})

app.post('/tacos', (req,res) => {
    res.send("POST /tacos Request")
})

app.listen(3000, () => {
    console.log("ON PORT 3000")
})