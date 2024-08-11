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

// let moviesLine = ["Ali","Khan"];


//the push method adds things at the end of the array...
// moviesLine.push("Atif");
// moviesLine.push("Muhammad");
// moviesLine.push("Sahal");
// moviesLine.push("Hashim");

// console.log(moviesLine);

// for(i=1;i<moviesLine.length;i++){
//     console.log(moviesLine[i])
// }

//pop() methods remove things from the end of the array...


// moviesLine.pop();
// console.log(moviesLine);

// moviesLine.pop();
// console.log(moviesLine)

// let person = moviesLine.pop();

// console.log(person);


//===================================================================================
//shift() and unshift() methods in JS
//===================================================================================



//shift()-> remove elements fromt the start of the array...
// for(i=0;i<6;i++){
//     console.log(moviesLine.shift());
// }
// console.log(moviesLine);


//unshift()->adds elements to the start of the array...


// let moviesLine = ["Ali","Khan"];

// moviesLine.push("Atif");

// console.log(moviesLine);

// moviesLine.unshift("VIP 1");
// moviesLine.unshift("VIP 2");
// moviesLine.unshift("VIP 3");

// console.log(moviesLine);


//===================================================================================
//concat()--->merge two arrays
//===================================================================================

// let colors = ["red","orange","blue"];
// let colors2 = ["black","indigo","brown"];

// let colors3 = colors.concat(colors2);

// console.log(colors3);



// //================================================================================
// //include()---> a boolean method that searchs for a value in an array....
// //================================================================================

// console.log(colors.includes("red"));


// //==============================
// //indexOf()
// //==============================

// console.log(colors3.indexOf("red"));
// console.log(colors3.indexOf("black"));
// console.log(colors3.indexOf("al;jfal"));
// console.log("Blue".indexOf());


// //===========================================
// //reverse()-->reveres an array.reverse is a destructive method it changes the original
// //===========================================

// console.log(colors3);

// console.log(colors3.reverse());

// console.log(colors3);

//======================================================================================
//slice() and splice() methods in array
//======================================================================================

// let colors = ["red","orange","blue"];
// let colors2 = ["black","indigo","brown","violet"];
// let colors3 = colors.concat(colors2);

// console.log(colors3);
// console.log(colors3.slice());
// console.log(colors3.slice(3));
// console.log(colors3.slice(5));
// //slice(2,4)...starts at the index of 2 but ends at the index of 3 not at 4...
// //4 is exclusive..............................................................

// console.log(colors3.slice(2,5));
// console.log(colors3.slice(2,6));
// console.log(colors3.slice(2,4));

// let lengthArray = colors3.length;
// console.log(colors3.slice(0,lengthArray));

// console.log(colors3.slice());
// console.log(colors3.slice(-3));


// ///SPLICE
// ///its destructive to the original array does not makes a copy of the array....
// //////it returns an array of the removed element...
// //////

// console.log(colors3);
// console.log(colors3.splice(5,1));
// console.log(colors3);

// // console.log(colors3.splice(1,0,"1212"))
// console.log(colors3.splice(1,0,"red-orange"))
// console.log(colors3.splice(4,0,"Yellow-Green","Greenish-blue"));


// ///
// ///SORT()
// ////
// //does not sort numerically or in ascending or descending order...
// //sort according to utf-16 code...
// ///
// //
// ///

// let nums = [0,76,34,2,8,1223,3,7,-12,-34344,-9];
// console.log(nums.sort());


// ///
// ///
// //
// ///
// //Turning an array in to string
// let names = ["Muhammad","Atif","Ali","Khan"];
// console.log(names.toString());


//The === Operator
//
// let str1 = "hi";
// let str2 = "hi";

// console.log(str1===str2);

// let arr1 = [1];
// let arr2 = [2];

// console.log(arr1===arr2);

// //two arrays are not equal to one another...why because JS does not compare the content inside 
// //array its only compare the references in the memory....

// let nums = [1,2,3];
// let numCopy = nums;

// //this two arrays are point to one another adding things in one array will add them 
// //in another array as well...

// console.log(nums);
// console.log(numCopy);

// nums.push(4);

// numCopy.push(5);

// //in this case we are referring to the same thing in memory 
// console.log(nums);
// console.log(numCopy);


// //but they are the same thing then we can compare the content to be equal or not...
// //=== or == are going to check the refernce in the memory
// console.log(nums===numCopy);

//============================================
//Const + Arrays
//============================================

const myEggs = ["brown","brown"];

//the content of the array can be changed as long as the refernces is the same
// we can not point the reference to somewhere else
//
//e.g we can not do like this
// myEggs = ["brown","black"]

console.log(myEggs);
myEggs.push("blue");

console.log(myEggs);
