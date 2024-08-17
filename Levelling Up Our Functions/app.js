

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


let radius = 8;

if(radius > 0){
    var PI = 3.1459;
    var circ = 15;
}
//This is only possible in case of var definition but var is almost deprecated and no longer needed to be used..

console.log(radius);
console.log(circ);
console.log(PI);



























