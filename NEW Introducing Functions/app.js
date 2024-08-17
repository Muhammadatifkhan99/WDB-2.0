// function sing(){
//     console.log("Do");
//     console.log("RE");
//     console.log("Do");
// }
// sing();
// sing();
// sing();
// sing();
// sing();
// sing();


// function greet(firstName){
//     console.log(`Hey there, ${firstName}`)
// }

// greet("Atif");
// greet("Muhammad");
// greet("Sahal");
// greet();

//Excercise

// function rant(message){
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }

// function greet(firstName, lastName){
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }

// greet("Muhammad","Atif");
// greet("Khan","Muhammad");
// greet("Sahal", "Farhan");


// function repeat(str, numTimes){
//     let result = "";
//     for(let i=0;i<numTimes;i++){
//         result += str;
//     }
//     console.log(result)
// }

// repeat("Atif", 4);
// repeat("A", 2);
// repeat("f", 5);

// //Snake Eye Excercise

// function isSnakeEye(die1,die2){
//     if(die1 === 1 && die2 ===1){
//         console.log("Snake Eye");
//     } else {
//         console.log("Not Snake Eyes");
//     }
// }

// isSnakeEye(1,1);
// isSnakeEye(2,3);
// isSnakeEye(5,4);


//The Return Key Word

//Without the return statement we cannot store values in a  variable, only we can print them
// function add(x,y){
//     console.log(x+y);
// }


///The RETURN KEY word returns only one object, we can return multiple things in an array
///RETURN stops the execution of that function
// function add(x,y){
//     if(typeof x !== "number" || typeof y !== "number"){
//         return false
//     }
//     let z = x + y;
//     return z;
// }


function multiply(x,y){
    return x*y;
}


function isShortsWeather(temp){
    if(temp >= 75){
        return true;
    } else {
        return false;
    }
}

function lastElement(arr){
    if(!arr.length) return null;
    return arr[arr.length-1];
}

function capitalize(str) {
    let capital = str[0].toUpperCase() + str.slice(1);
    return capital;
}

function sumOfArray(arr1){
    let sum = 0;
    for(a of arr1){
        sum += a;
    }
    return sum;
}