const number = ["1","2","3","4","5","6","7","8","9","10"];

// function print(element){
//     console.log(element)
// }

// print(number[0]);
// print(number[1]);
// print(number[2]);

// number.forEach(print);

// number.forEach(function (el){
//     console.log(el);
// })

// //FOR EACH FOR EVEN NUMBERS

// number.forEach(function (el){
//     if(el % 2 === 0){
//         console.log(el);
//     }
// })

//These methods expects a method to be passed in to them.
//and they call the function for each item again and agian...
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////MAP/////////////////////////////////////

// const doubles = number.map(function (num){
//     return num * 2;
// })


// let movies = [
//     {
//         title: "Amadeus",
//         score: 99
//     },
//     {
//         title: "Parasite",
//         score: 98
//     },
//     {
//         title: "Stand by Me",
//         score: 85
//     },
//     {
//         title: "Alien",
//         score: 90
//     }

// ]

// let titles = movies.map(function (movie){
//     return movie.title.toUpperCase();
// })


// let scores = movies.map(function(t){
//     return t.score;
// })

// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
// const firstNames = fullNames.map(function (f){
//     return f.first;
// })

///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////Arrow Functions/////////////////////////


function add(x){
    return x+x;
}

let add1 = x => {
    return x + x;
}

let mul = (x,y) => {
    return x * y;
}

let nothing = () => {
    console.log("nothing");
}

let greet = person => {
    console.log(`Hey ${person}`);
}

///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
//IMPLICIT RETURNS IN JAVASCRIPT

// let addi = (x,y) => {
//     return x + y;
// }

// let addy = (x,y) => x + y

// let rand = () => (
//     Math.floor(Math.random() * 6) +1
// )

let movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Parasite",
        score: 98
    },
    {
        title: "Stand by Me",
        score: 85
    },
    {
        title: "Alien",
        score: 90
    }

]

// let newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score/10}`
// })

let newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score/10}`
))





