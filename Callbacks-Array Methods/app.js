// const number = ["1","2","3","4","5","6","7","8","9","10"];

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

// let newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score/10}`
// })

// let newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score/10}`
// ))

/////////////////////////////////////FILTER////////////////////////////////////

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// let forth = numbers.filter(n => {
//     return n===4;
// })

let tenth = numbers.filter(n => {
    return n < 10;
})


let movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1984
    },
    {
        title: "Parasite",
        score: 55,
        year: 2019
        
    },
    {
        title: "Sharkando",
        score: 60,
        year: 2013
        
    },
    {
        title: "13 Going in to 30",
        score: 98,
        year: 2004
        
    },
    {
        title: "Jingle All the Way",
        score: 69,
        year: 1996
    },
    {
        title: "Stand by Me",
        score: 85,
        year: 1986
    },
    {
        title: "Alien",
        score: 90,
        year: 1979
    }

]

let goodMovies = movies.filter((m) => {
    return m.score > 80
})
let goodTitles = goodMovies.map((m) => {
    return m.title;
})

let badMovies = movies.filter((m) => {
    return m.score < 70
})

let recentMovies = movies.filter((m) => {
    return m.year > 2000;
})

const validUserNames = (username) => {
    return username.filter(username => {
        return username.length < 10;
    });
}
// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);

const nums = [80,90,77,75,78,89,98];

let seventy = nums.every((m) => {
    return m > 80;
    //returns true if all the elements pass the test, else returns false if only elements
    //fails to pass the condition.
})

let someof = nums.some(m => {
    return m > 90;
    //returns true if only one element greater then 90 can found
})


//////////////////////////////////REDUCE///////////////////////////////////////

const prices = [12.34,23.56,67.45,83.45];

//total sum of the array
// let total = 0;

// for(let price of prices){
//     total +=price;
// }
// console.log(total);

const total = prices.reduce((total,price) => {
    return total + price
})

const multiply = prices.reduce((total,price) => {
    return total * price
})

let minimum = prices.reduce((min,price) => {
    if(price > min){
        return price
    } else{
        return min;
    }
})


const highestRated = movies.reduce((bestM,currM) => {
    if(bestM.score > currM.score){
        return bestM;
    } else {
        return currM;
    }
})


