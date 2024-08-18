

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
// const add = function(x,y){
//     return x + y;
// }

///////////////////////////////////////////////////////////////////////////////////


///////////////////HIGHER ORDER FUNCTIONS////////////////////////////////////////////

//These are functions that operate on/with other functions
//They can:
//          Accept other functions as arguments
//          Return a function

// function callTwice(func){
//     func();
//     func();
// }
// function callTenTimes(func){
//     for(let i=0;i<10;i++){
//         func();
//     }
// }

// function rollDie(){
//     let roll = Math.floor(Math.random()* 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);

// //callTwich(rollDie()) This will execut the function rollDie and return a number 
// //which is not a correct way...


// callTenTimes(rollDie);
////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////RETURNING A FUNCTION FROM A FUNCTION////////////////////////////////////////////

function myMysteryfunction(){
    let rand = Math.random();
    if(rand > 0.5){
        return function (){
            console.log("Congrats!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            console.log("You WON a Million Dollars");
        }
    } else {
        alert("You have been impacted by a Computer Virus");
        alert("DONOT TRY TO CLOSE THIS WINDOWS");
        alert("DONOT TRY TO CLOSE THIS WINDOWS");
        alert("DONOT TRY TO CLOSE THIS WINDOWS");
        alert("DONOT TRY TO CLOSE THIS WINDOWS");
        alert("DONOT TRY TO CLOSE THIS WINDOWS");
        alert("DONOT TRY TO CLOSE THIS WINDOWS");
        
    }
}

// myMysteryfunction();
// myMysteryfunction();

function isBetween(min,max){
    return function(num){
        return num >=min && num <= max;
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////


///////////////////DEFINING METHODS////////////////////////////////////////////


//WE CAN FUNCTIONS ON OBJECT AND WE CALL THEM AS METHODS
//A METHOD IS SIMPLY A FUNCTION THAT IS CALLED AS A PROPERTY ON THE OBJECT
//


// const myMath = {
//     PI: 3.14589,
//     square: function(num){
//         return num **2;
//     },
//     cube: function (num){
//         return num **3;
//     }
// }

//RECENTLY INTRODUCED SYNTAX TO JS

// const myMath = {
//     PI : 3.124,
//     square (num) {
//         return num **2;
//     },
//     cube (num){
//         return num **3;
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////

///////////////////THE DREAD KEYWORD THIS////////////////////////////////////////////

const cat = {
    name: "Blue Steele",
    color: "grey",
    breed: "Scottish Fold",
    meow() {
        console.log("This is: ",this);
        console.log(`${this.name} say meow`);
    }

}

let meow2 = cat.meow();












