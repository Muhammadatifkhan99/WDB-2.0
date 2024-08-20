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




///////////////////////////////////////////////////////////////////////////////




