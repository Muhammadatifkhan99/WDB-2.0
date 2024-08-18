//setTimeout will calls a function after a particular set time


// setTimeout(() => {
//     console.log("Hello");
// },3000)


//setInterval calls a function again and again after some time...
//

const id = setInterval(() => {
    console.log((Math.random() *6)+1);
},2000)

clearInterval(id); //To stop the setInterval function ASAP