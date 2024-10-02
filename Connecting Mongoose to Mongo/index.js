const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/moviesApp")
    .then(() => {
        console.log("CONNECTION OPEN");
    })
    .catch(err => {
        console.log("ERROR");
        console.log(err);
    })


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("CONNECTION OPEN")
// });


const movieSchema = new mongoose.Schema({
    title : String,
    year: Number,
    score: Number,
    rating: String
})

//This will gives us a class
const Movie = mongoose.model('Movie', movieSchema);

//This will make a new instance of the Movie class
const Amadeus = new Movie ({title: 'amadeus', year: 1986, score: 9.2, rating: 'R'});


