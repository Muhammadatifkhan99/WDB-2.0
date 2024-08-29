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

// const delayedColorChange = (newColor, Delay, doNext) =>{
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext();
//     }, Delay);
// }

// delayedColorChange('red',2000, () => {
//     delayedColorChange('orange',1000, () => {
//         delayedColorChange('yellow',1000, () =>{
//             delayedColorChange('green',1000,() => {
//                 delayedColorChange('blue',1000, () =>{
                    
//                 })
//             })
//         })
//     })
// });

//=======================================================================================
//                         ....fake request using callbacks....
//=======================================================================================
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) +500;
//     setTimeout(() => {
//         if(delay >= 4000){
//             failure('Connection Timeout');
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     },delay)
// }
//
//At each stage if any of the callback does not worked it will not proceed further...
//This is like that if the first request failed it will never try to make the other requests
//
// fakeRequestCallback('books.com/page1', (response) => {
//     console.log("IT WORKED");
//     console.log(response);
//     fakeRequestCallback('books.com/page2', (response) => {
//         console.log("IT WORKED AGAIN");
//         console.log(response);
//         fakeRequestCallback('books.com/page3', (response) => {
//             console.log("IT WORKED AGAIN for the 3rd time");
//             console.log(response)
//         }, (err) => {
//             console.log("ERROR (3rd Req)");
//         })
//     },function (err) {
//         console.log("ERROR (2nd Req)!!!",err);
//     })
// }, (err) => {
//     console.log("ERROR!!!",err);
// })

//=======================================================================================
//                         ....fake requests using promises....
//=======================================================================================

// a promise an eventual guarantee of either an error or a value
// we attach callbacks to the promise instead of passing them as a functions
//

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000){
                reject ('Connection Timeout');
            } else {
                resolve (`Here is your fake data from ${url}`);
            }
        }, delay);
    })
}

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//     console.log("IT WORKED");
//     fakeRequestPromise('yelp.com/api/coffee/page2')
//     .then(() => {
//         console.log("IT WORKED AGAIN (2ND TIMES)")
//         fakeRequestPromise('yelp.com/api/coffee/page3')
//         .then(() => {
//             console.log("IT WORKED AGAIN (3RD TIME)");
//         })
//         .catch(() => {
//             console.log("OH NO ERROR (page3)");
//         })
//     }).catch(() => {
//         console.log("OH No ERROR (page2)")
//     })
// })
//     .catch(() => {
//     console.log("OH ON...ERROR (page1)")
// })




//=======================================================================================
//                         ....The Magic of Promises....
//=======================================================================================
fakeRequestPromise ('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!page1");
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2');
    })
    .then((data) => {
        console.log("IT WORKED!!!!!page2")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3');
    })
    .then((data) => {
        console.log("IT WORKED!!!!!page3")
        console.log(data)
    })
    .catch(() => {
        console.log('OH NO,A REQUEST FAILED');
    })

//=======================================================================================
//                         ....The Asyn Keyword....
//=======================================================================================
