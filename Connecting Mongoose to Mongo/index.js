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
// const Amadeus = new Movie ({title: 'amadeus', year: 1986, score: 9.2, rating: 'R'});



// Movie.insertMany([
//     {title: 'Amelie', year: 2001, score: 8.2, rating: 'R'},
//     {title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
//     {title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
//     {title: 'Stand by Me', year: 1986, score: 8.6, rating: 'R'},
//     {title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
// ])
// .then(data => {
//     console.log("IT WORKED");
//     console.log(data);
// })
Movie.findById({_id : '6702651a98fbe3bcee62be14'}).then (m => console.log(m));
Movie.findOne({}).then (m => console.log(m));



