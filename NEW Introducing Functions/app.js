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

function greet(firstName, lastName){
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

greet("Muhammad","Atif");
greet("Khan","Muhammad");
greet("Sahal", "Farhan");


function repeat(str, numTimes){
    let result = "";
    for(let i=0;i<numTimes;i++){
        result += str;
    }
    console.log(result)
}

repeat("Atif", 4);
repeat("A", 2);
repeat("f", 5);

//Snake Eye Excercise

function isSnakeEye(die1,die2){
    if(die1 === 1 && die2 ===1){
        console.log("Snake Eye");
    } else {
        console.log("Not Snake Eyes");
    }
}

isSnakeEye(1,1);
isSnakeEye(2,3);
isSnakeEye(5,4);



