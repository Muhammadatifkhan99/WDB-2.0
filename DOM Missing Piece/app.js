const btn = document.querySelector('#v2');

btn.onclick = function (){
    console.log("You Clicked Me");
    console.log("I hope this is working");
}

function scream (){
    console.log("AHHHHHHHHHHHHHH");
    console.log("Stop Touching Me");
}

btn.onmouseenter = scream; //we are not executing the scream function

//the onmouseenter will execute this function and let us know...


document.querySelector('h1').onclick = () => console.log("you clicked the h1"); //we cannot write this without
//the function because that will execute right away and we want execution only when its 
//clicked or an event occurs....