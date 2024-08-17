

// function collectEggs(){
//     let totalEggs = 6;
// }
// console.log(totalEggs)
//Function scope is the visability of the variable out of certain block or function
// let bird = "chenchra";
// function birdWatch (){
//     // let bird = "mandirin duck";
//     console.log(bird)
// }
 
// birdWatch();


// let radius = 8;

// if(radius > 0){
//     const PI = 3.1459;
//     let circ = 15;
// }

// console.log(radius);
// console.log(PI); // Block scoping with let can be avoided with """""var"""""


// let radius = 8;

// if(radius > 0){
//     var PI = 3.1459;
//     var circ = 15;
// }
// //This is only possible in case of var definition but var is almost deprecated and no longer needed to be used..

// console.log(radius);
// console.log(circ);
// console.log(PI);


///////////////////LEXICAL SCOPING////////////////////////////////////////////

function bankRobbery(){
    const heroes = ["spiderman", "batman","wolverine","black panther"];
    function cryForHelp(){
        function innerftn (){
            for(let hero of heroes){
            console.log(`Please help us! ${hero.toUpperCase()}`);
        }
        }
        innerftn();
    }
    cryForHelp();
}
// The lexical scope have access to everthing in the lexical order but not the way back up
// you can not access things/variables up in the code/ defined above where called...
//////////////////////////////////////////////////////////////////////////////////



///////////////////FUNCTION EXPRESSIONS////////////////////////////////////////////

// function add(x,y){
//     return x + y;
// }


//Functions expressions are just another way of defining functions and they behave just like 
// the way normal functions are defined....behind the scene functions are objects...
// we can pass functions to other functions as arguments as well.....
const add = function(x,y){
    return x + y;
}


























