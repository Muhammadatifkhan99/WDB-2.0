// console.log("Hello");

// let multiply = (x,y) => {
//     return x * x;
// }

// let square = x => {
//     return x*x;
// }

// function isRightTriangle(a,b,c) {
//     return square(a) + square(b) === square(c);
// }

// isRightTriangle(3,4,5);

// console.log("After")

//=======================================================================================
//                         ....WEB APIS....
//=======================================================================================
// console.log("Sending request to server");
// //
// //if JS is single threaded then how does this functions allowed to run
// //actually these things are handled by the browser
// //JavaScript handover some task to the browser to take care of....
// //WEBAPIS are methods that are handed over to the browser to be taken care of.
// //this include things like setTimeout() and making requests etc...
// //The call stack in JS is able to recognize these webapis functions and it passes them to the browser
// //
// setTimeout(() => {
//     console.log("Here is you data from the server");
// },3000);
// console.log("I am at the end of the file");

//=======================================================================================
//                         ....CallBack Hell....
//=======================================================================================
// document.body.style.backgroundColor = 'red';
// document.body.style.backgroundColor = 'orange';
// document.body.style.backgroundColor = 'yellow';

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'; 
// },1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// },2000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// },3000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         },1000)
//     },1000)
// },1000)

const delayedColorChange = (newColor, Delay, doNext) =>{
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, Delay);
}

delayedColorChange('red',2000, () => {
    delayedColorChange('orange',1000, () => {
        delayedColorChange('yellow',1000, () =>{
            delayedColorChange('green',1000,() => {
                delayedColorChange('blue',1000, () =>{
                    
                })
            })
        })
    })
});



//=======================================================================================
//                         ....WEB APIS....
//=======================================================================================


//=======================================================================================
//                         ....WEB APIS....
//=======================================================================================

//=======================================================================================
//                         ....WEB APIS....
//=======================================================================================

//=======================================================================================
//                         ....WEB APIS....
//=======================================================================================
