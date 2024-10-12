const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/moviesApp")
    .then(() => {
        console.log("CONNECTION OPEN");
        //we donot need to nest our code here becasue mongoose do operation buffering allowing us to use
        //the models immediatly with out having to wait of the mongoose to be connected
        //
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
// Movie.findById({_id : '6702651a98fbe3bcee62be14'}).then (m => console.log(m));
// Movie.findOne({}).then (m => console.log(m));

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
// Movie.findById({_id : '6702651a98fbe3bcee62be14'}).the
// n (m => console.log(m));
// Movie.findOne({}).then (m => console.log(m));



/////////////////////////////////////////////////////////////////////////////////
//UPDATING IN MONGO
/////////////////////////////////////////////////////////////
//////////////////////

// Promise {
//   <pending>,
//   [Symbol(async_id_symbol)]: 139,
//   [Symbol(trigger_async_id_symbol)]: 138
// }
// > CONNECTION OPEN

// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// >
// > Movie.updateOne({title: 'amadeus'},{year:1984}).then (res => console.log(res))
// Promise {
//   <pending>,
//   [Symbol(async_id_symbol)]: 1115,
//   [Symbol(trigger_async_id_symbol)]: 1111
// }
// > {
//   acknowledged: true,
//   modifiedCount: 1,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 1
// }
// > Movie.updateMany({title: {$in ['amadeus','stand by me']}},{score:10}).then (res => console.log(res))
// Movie.updateMany({title: {$in ['amadeus','stand by me']}},{score:10}).then (res => console.log(res))
//                               ^

// Uncaught SyntaxError: Unexpected token '['
// > Movie.updateMany({title: {$in: ['amadeus', 'stand by me']}}, {score:10}).then (res => console.log(res))
// Promise {
//   <pending>,
//   [Symbol(async_id_symbol)]: 19358,
//   [Symbol(trigger_async_id_symbol)]: 19354
// }
// > {
//   acknowledged: true,
//   modifiedCount: 1,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 1
// }

// > Movie.updateMany({title: {$in: ['amadeus', 'Stand by Me']}}, {score: 10}).then (res => console.log(res))
// Promise {
//   <pending>,
//   [Symbol(async_id_symbol)]: 19994,
//   [Symbol(trigger_async_id_symbol)]: 19990
// }
// > {
//   acknowledged: true,
//   modifiedCount: 1,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 2
// }
// Mov
// Uncaught ReferenceError: Mov is not defined
// > Movie.findOneAndUpdate({title : "The Iron Giant"} , {score: 7.0}).then (res => console.log(res))
// Promise {
//   <pending>,
//   [Symbol(async_id_symbol)]: 32148,
//   [Symbol(trigger_async_id_symbol)]: 32144
// }
// > {
//   _id: new ObjectId('67025dc0c22ace00fe1c164f'),
//   title: 'The Iron Giant',
//   year: 1999,
//   score: 7.5,
//   rating: 'PG',
//   __v: 0
// }
// > Movie.findOneAndUpdate({title : "The Iron Giant"}, {score : 7.8 }, {new : true}). then ( m => console.log(m))
// Promise {
//   <pending>,
//   [Symbol(async_id_symbol)]: 63116,
//   [Symbol(trigger_async_id_symbol)]: 63112
// }
// > {
//   _id: new ObjectId('67025dc0c22ace00fe1c164f'),
//   title: 'The Iron Giant',
//   year: 1999,
//   score: 7.8,
//   rating: 'PG',
//   __v: 0
// }

