///////////////////////Default Params//////////////////////////////////////////


//Normal function
// function rollDie(numSides){
//     return Math.floor(Math.random() * numSides) + 1;
// }

// Arrow Functions with implicit return

// let rollDie = numSides => Math.floor(Math.random()*numSides) + 1;


///OLDER WAY OF DECLARING A DEFAULT PARAMS

function rollDie(numSides){
    if(numSides === undefined){
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) + 1;
}

function rollDie2(numSides = 6){
    return Math.floor(Math.random() * 6) + 1;
}


function greet(msg = "hey there", person){
    console.log(`${msg} ${person}`);
}


///The defaut params should be put in the last or after the one which have no default params
//see below and above examples for this concept...

function greet2(person,msg = "hey there"){
    console.log(`${msg} ${person}`);
}

//New feature must be tested and then used otherwise can casue some issues in the prodcution

///////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////SPREAD SYNTAX IN JS////////////////////////////////////////

//this does not works for the case if an array is passed to this function
console.log(Math.max(12,3,4,5,6,5,456,33,78,));
console.log(Math.max(1,4,56,7,3,4,546,87,43,0));

let nums = [1,3,4,23,56,787676,234214123,87996];

//We need to use the spread syntax in this case
console.log(Math.max(nums));

//The spread syntax is usefull here...the iterable is spread into a function call

let max = Math.max(...nums);
console.log(max);

//Strings

console.log("hello")
console.log(..."hello")
console.log(...nums)


///////////////////////////////////////////////////////////////////////////////

