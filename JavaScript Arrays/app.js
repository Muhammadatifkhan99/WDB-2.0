// // JavaScript arrays...store multiple values at a Time
// //Arrays are ordered collection of items,,,,collections of songs in the playlist, colloection 
// //of levels in the game,,,,collection of comments on IG post......etc etc.....



// let daysOfWeek = ["Mondy", "Tuesday","Wednesday"];
// console.log(daysOfWeek[0])
// console.log(daysOfWeek[1])
// console.log(daysOfWeek[2])

// // JS arrays does not to be homogenius we can put random stuff such as string 
// //numbers, booleans etc.....


// let kitchenSink = [true,undefined,12,9.999999,NaN,false,null,"HIIII!!!!!"]


//==================================================================================
//Accessing Arrays
//==================================================================================

//Arrays are indexed, we can access it using index starting at zero....


// //These are the seven dwarfs...
// let dwarfs = ["Doc","Dopey","Bashful","Grumpy","Sneezy","Sleepy","Happy"];

// //length of th array is 1 greater than the maximium index....

// console.log(dwarfs[0])
// console.log(dwarfs[1])
// console.log(dwarfs[2])


// let colors = ['rad','black','yellow'];
// console.log("Printing the array before modifications:::::");
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// colors[0] = 'red';
// colors[2] = 'yelloww';


// console.log("Printing the array after modifications:::::");
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);


// colors[10] = "indigo";
// //this will be added to the index of 10 but before it there will be empty indexes there
// //
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[4]);
// console.log(colors[5]);
// console.log(colors[6]);
// console.log(colors[7]);
// console.log(colors[8]);
// console.log(colors[9]);
// console.log(colors[10]);
// console.log("The length of the array is: ",colors.length);

//====================================================================================
//Array Methods
//====================================================================================

//push
//pop
//shift
//unshift
//...

let moviesLine = ["Ali","Khan"];


//the push method adds things at the end of the array...
moviesLine.push("Atif");
moviesLine.push("Muhammad");
moviesLine.push("Sahal");
moviesLine.push("Hashim");

for(i=1;i<moviesLine.length;i++){
    console.log(moviesLine[i])
}

//pop() methods remove things from the end of the array...


moviesLine.pop();
console.log(moviesLine);

moviesLine.pop();
console.log(moviesLine)

let person = moviesLine.pop();

console.log(person);