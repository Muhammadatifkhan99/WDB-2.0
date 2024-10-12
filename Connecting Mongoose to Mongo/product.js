const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/moviesApp")
    .then(() => {
        console.log("CONNECTION OPEN");
    })
    .catch(err => {
        console.log("ERROR");
        console.log(err);
})