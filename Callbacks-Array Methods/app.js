const number = ["1","2","3","4","5","6","7","8","9","10"];

// function print(element){
//     console.log(element)
// }

// print(number[0]);
// print(number[1]);
// print(number[2]);

// number.forEach(print);

number.forEach(function (el){
    console.log(el);
})

//FOR EACH FOR EVEN NUMBERS

number.forEach(function (el){
    if(el % 2 === 0){
        console.log(el);
    }
})
