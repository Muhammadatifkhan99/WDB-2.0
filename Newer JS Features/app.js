///////////////////////Default Params//////////////////////////////////////////


//Normal function
// function rollDie(numSides){
//     return Math.floor(Math.random() * numSides) + 1;
// }

// Arrow Functions with implicit return

// let rollDie = numSides => Math.floor(Math.random()*numSides) + 1;


///OLDER WAY OF DECLARING A DEFAULT PARAMS

// function rollDie(numSides){
//     if(numSides === undefined){
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

// function rollDie2(numSides = 6){
//     return Math.floor(Math.random() * 6) + 1;
// }


// function greet(msg = "hey there", person){
//     console.log(`${msg} ${person}`);
// }


///The defaut params should be put in the last or after the one which have no default params
//see below and above examples for this concept...

// function greet2(person,msg = "hey there"){
//     console.log(`${msg} ${person}`);
// }

//New feature must be tested and then used otherwise can casue some issues in the prodcution

///////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////SPREAD SYNTAX IN JS////////////////////////////////////////

//this does not works for the case if an array is passed to this function
// console.log(Math.max(12,3,4,5,6,5,456,33,78,));
// console.log(Math.max(1,4,56,7,3,4,546,87,43,0));

// let nums = [1,3,4,23,56,787676,234214123,87996];

// //We need to use the spread syntax in this case
// console.log(Math.max(nums));

// //The spread syntax is usefull here...the iterable is spread into a function call

// let max = Math.max(...nums);
// console.log(max);

// //Strings

// console.log("hello")
// console.log(..."hello")
// console.log(...nums)


// ///////////////////////////////////////////////////////////////////////////////



// const feline = { legs: 4, family : "Felidae"};
// const canine = {isFurry: true, family: "Caninae"};

// //adding a property to a single object 
// console.log({...feline, color: "black"})


// //creating a new object from these two objects
// const catDog = {...feline, ...canine}; //the family attribute of caniae will win...
// const catDog1 = {...canine, ...feline}; //the family attribute of feline will win...
// const catDog2 = {...canine, ...feline, family: "Steele"};


// //spreading an array into an object

// let num1 = [1,2,3,4,5,6,7,8,9];

// console.log({...num1})

/////////////////////////////////////////////////////////////////////////////////


////////////////REST PARAMS////////////////////////////////////////////////////


//The arguments objects...inside every function we have an array like object called 
//the arugment object, its like an array but not an actual array because we can not 
//implement pop() and push() methods on it.

//not available in arrow functionss

// function sum(){
//     // console.log(arguments)
//     return arguments.reduce((total,el) => total + el;)
// }
//we cannot add the arguments together using reduce becasue this method does not apply to it.
//we need something to make an array out of them
//this is where the REST PARAMS comes in...
//REST collects all of the remaining arguments can put them in an actual array


//its called REST because it collects the REST of the parameter....

// function sum(...nums){
//     return nums.reduce((total,el) => total + el);
// }


// function raceResults (gold,silver,...everyone){
//     console.log(`Gold medals goes to: ${gold}`);
//     console.log(`Silver medals goes to: ${silver}`);
//     console.log(`And thank to ${everyone}`);
// }


///////////////////////////////////////////////////////////////////////////////

//          DESTRUCTURING ARRAY AND OBJECTS


///its a short,clean syntax to unpack values from Array and properties from objects

const scores = [2345,8976,4563,1087,5237,4563,9083];

const [gold,silver,...resti] = scores;

//  const [] = arrayname;
//
//
///////////////////////////////////////////////////////////////////////////////


//////////////////////////DESTRUCTURING OBJECTS////////////////////////////////

const user = {
    firstName: "Harvay",
    LastName: "Milk",
    age: 34,
    bio: "teacher"
}


console.log(user.firstName);
console.log(user.LastName);

function names({firstName,LastName}){
    return `${firstName} ${LastName}`;
}




