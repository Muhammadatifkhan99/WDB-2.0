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
let newColor= "";
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}
const buttons = document.querySelectorAll("button");

for (let button of buttons){
    button.addEventListener('click', function () {
        this.style.backgroundColor = makeRandColor();
        this.style.color = makeRandColor();
    })
}

const h1s = document.querySelectorAll('h1');
for(let h1 of h1s){
    h1.addEventListener("click", function(){
    this.style.backgroundColor = makeRandColor();
        this.style.color = makeRandColor(); 
    })
}
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
//========================================================================================










//=======================================================================================
//=======================================================================================
//                        .....addEventListeners.....
//=======================================================================================
//=======================================================================================


//=======================================================================================
//=======================================================================================
//                        .....addEventListeners.....
//=======================================================================================
//=======================================================================================


//=======================================================================================
//=======================================================================================
//                        .....addEventListeners.....
//=======================================================================================
//=======================================================================================

