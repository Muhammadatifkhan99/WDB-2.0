// const btn = document.querySelector('#v2');

// btn.onclick = function (){
//     console.log("You Clicked Me");
//     console.log("I hope this is working");
// }

// function scream (){
//     console.log("AHHHHHHHHHHHHHH");
//     console.log("Stop Touching Me");
//}

// btn.onmouseenter = scream; //we are not executing the scream function

//the onmouseenter will execute this function and let us know...


// document.querySelector('h1').onclick = () => console.log("you clicked the h1"); //we cannot write this without
//the function because that will execute right away and we want execution only when its 
//clicked or an event occurs....

//=======================================================================================
//=======================================================================================
//                        .....addEventListeners.....
//=======================================================================================
//=======================================================================================

// const btn3 = document.querySelector('#v3');

// btn3.addEventListener('click', function () {
//     alert("Clicked");
//     console.log("You clicked Me");
// })

// function shout () {
//     console.log("SHOUT");
// }
// function twist() {
//     console.log("Twist");
// }

// const tasbutton = document.querySelector("#tas");

// tasbutton.onclick = shout;
// tasbutton.onclick = twist;

// tasbutton.addEventListener('click',twist);
// tasbutton.addEventListener('click',shout);

//=======================================================================================
//=======================================================================================
//                        .....EVENTS and the keyword this.....
//=======================================================================================
//=======================================================================================
// let newColor= "";
// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     newColor = `rgb(${r}, ${g}, ${b})`;
//     return newColor;
// }
// const buttons = document.querySelectorAll("button");

// for (let button of buttons){
//     button.addEventListener('click',colorize)
// }

// const h1s = document.querySelectorAll('h1');
// for(let h1 of h1s){
//     h1.addEventListener("click",colorize)
// }

// function colorize () {
//     this.style.backgroundColor = makeRandColor();
//     this.style.color = makeRandColor(); 
// }
// function getContrastingColor(r, g, b) {
//     // Formula to calculate brightness based on the RGB values
//     const brightness = (r * 299 + g * 587 + b * 114) / 1000;
//     return brightness > 125 ? 'black' : 'white'; // If bright, use black text; if dark, use white text
// }
// const buttons = document.querySelectorAll('button');

// // // for(let button of buttons){
// // //     button.addEventListener('click', () => {
// // //     button.style.backgroundColor = makeRandColor();
// // //     button.style.color = makeRandColor();
// // //     })
// // // }
// for (let button of buttons) {
//     button.addEventListener('click', () => {
//         const newColor = makeRandColor();
//         // Get the RGB values of the new color
//         const [r, g, b] = newColor.match(/\d+/g).map(Number);

//         // Set the background color of the button
//         button.style.backgroundColor = newColor;
        
//         // Set a contrasting color for the text to make it visible
//         button.style.color = getContrastingColor(r, g, b);
        
//         // Change the button's text to display the RGB value of the background color
//         button.textContent = newColor;
//     // button.addEventListener('click', function handleClick() {
//     //     button.style.backgroundColor = makeRandColor();
//     //     button.style.color = makeRandColor();
//     //     button.textContent = newColor;
//     //     // Remove the event listener after the first click
//     //     button.removeEventListener('click', handleClick);
//  });
// }

// const h1 = document.querySelectorAll('h1')

// for (let h of h1){
//     h.addEventListener('click', () => {
//         h.style.backgroundColor = makeRandColor();
//         h.style.color = makeRandColor();
//     })
// }
//=======================================================================================
//=======================================================================================
//                        .....KEYBOARD EVENTS.....
//=======================================================================================
//=======================================================================================


                            //Event Object
//the event object is something that is automatically passed into the callback function in the addeventlistener
//contain the information about the event that occured
//event the coordinates of that object are displayed to the user...
//client x andn client y with x and y cooridnates
//with the keyboard events we frequently rely on this because we want to know which key was pressed...
// const btns = document.querySelector('button');

// // btns.addEventListener('click', function() {
// //     alert("do make me angry"
// //     )
// // })

// //capturing the event object
// btns.addEventListener('click', function(evt) {
//     console.log(evt);
// })

// const inputs = document.querySelector('input');
// //listening for the keyup and keydown events on the entire window
// // inputs.addEventListener('keydown', function (e) {
// //     console.log(e.key);
// //     console.log(e.code);
// // })


// //keydown anywhere on the window

// window.addEventListener('keydown', function(e){
//     switch(e.code) {
//         case 'ArrowUp':
//             console.log("UP!");
//             break;
//         case 'ArrowDown':
//             console.log("DOWN!");
//             break;
//         case 'ArrowLeft':
//             console.log("LEFT");
//             break;
//         case 'ArrowRight':
//             console.log("RIGHT");
//             break;
//         default:
//             console.log("IGNORED");
//     }
// })




// inputs.addEventListener('keyup', function () {
//     console.log("Key up");
// })

//=======================================================================================
//=======================================================================================
//                        .....FORMS EVENTS (Simple version of preventDefaults() function ).....
//=======================================================================================
//=======================================================================================
// const form = document.getElementById('shelterForm');

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log("SUBMITTED");
// })
//=======================================================================================
//=======================================================================================
//                        .....Practive with forms events.....
//=======================================================================================
//=======================================================================================
// const form = document.getElementById('shelterForm');
// const input = document.querySelector('#catNames');
// const list = document.querySelector('#cats');

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const catName = input.value;
//     const newLi = document.createElement('Li');
//     newLi.innerText = catName;
//     console.log(newLi);
//     list.append(newLi);
//     input.value = "";
// })


//=======================================================================================
//=======================================================================================
//                        .....ORIGINAL VERSION:::FORMS EVENTS.....
//=======================================================================================
//=======================================================================================

// const tweetForm = document.querySelector('#tweetForm');
// const tweetContainer = document.querySelector('#tweets');

// tweetForm.addEventListener("submit", function (e){
//     e.preventDefault();
//     // const userInput =  document.querySelectorAll('input')[0];
//     // const tweetInput =  document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     // console.log(userInput.value, tweetInput.value);
//     addTweet(usernameInput.value, tweetInput.value);
//     usernameInput.value = '';
//     tweetInput.value = '';
// })

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username);
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`);
//     tweetContainer.append(newTweet);
// }

//=======================================================================================
//=======================================================================================
//                        ..... INPUT CHANGE EVENTS.....
//=======================================================================================
//=======================================================================================

// const change = document.querySelector('input');
// const h1 = document.querySelector('h1');


// // change.addEventListener('change', function () {
// //     console.log("Changing Event");
// // })

// change.addEventListener('input', function (e) {
//     h1.innerText = change.value;
// });


//=======================================================================================
//=======================================================================================
//                        .....EVENT BUBBLING.....
//=======================================================================================
//=======================================================================================
// const button = document.querySelector('#ChangeColor');
// const container = document.querySelector('#container');

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     newColor = `rgb(${r}, ${g}, ${b})`;
//     return newColor;
// }

// button.addEventListener('click', function (e){
//     container.style.backgroundColor = makeRandColor();
//     e.stopPropagation();
// });
// container.addEventListener('click',function() {
//     container.classList.toggle('hide');
// }
// )
//=======================================================================================
//=======================================================================================
//                        .....EVENT DELIGATION.....
//=======================================================================================
//=======================================================================================

const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');

// const lis = document.querySelectorAll('li');

// for(let li of lis){
//     li.addEventListener('click',function(){
//         li.remove();
//     })
// }

tweetForm.addEventListener("submit", function (e){
    e.preventDefault();
    // const userInput =  document.querySelectorAll('input')[0];
    // const tweetInput =  document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    // console.log(userInput.value, tweetInput.value);
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetContainer.append(newTweet);
}

tweetContainer.addEventListener('click', function(e){
    e.target.nodeName === "LI" && e.target.remove();
    // console.log('click');
    // console.log(e);
})

//=======================================================================================
//=======================================================================================
//=======================================================================================
//=======================================================================================