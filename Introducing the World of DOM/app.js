// const allLinks = document.querySelectorAll('a');

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

//console.dir(document); //shows the details of the document object....

// const banner = document.getElementById("banner"); //This gives the object representation of that object
// console.dir(banner);


// const toc = document.getElementById("toc");
// console.dir(toc);


//getElementsByTagName

// const allImages = document.getElementsByTagName("img");
 
// for(let img of allImages){
//     img.src = "https://images.unsplash.com/photo-1445953993297-28dff00088f3?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// }


//getElementsByTagName returns an HTMLCollection...and inside it have the Element, and its that object that we are getting back
//that has all the properties that represents a single html element




//getElementsByClassName

// const squareImages = document.getElementsByClassName('square');
// for(let img of squareImages){
//     img.src = "https://images.unsplash.com/photo-1445953993297-28dff00088f3?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                  querySelectors
//a new and all in one method to select the elements
//

let allh1 = document.querySelector('h1');

// queryselector can be used to select by any CSS style we want
// id, class , tag and much more
//query selector just gives us the first match 

document.querySelector("p:nth-of-type(2)")


//querySelectorAll

//same idea, but returns the collection of matching elements


document.querySelectorAll("p");
document.querySelectorAll("img");
document.querySelectorAll("a");
//CSS DECENDENT SELECTORS

const links = document.querySelectorAll("p a");


// for(let link of links){
//     console.log(link.href);
// }

const h1 = document.querySelector("h1");

const originHead = h1.innerText;
//  h1.innerHTML = originHead;
// h1.innerText = "nothing to say now";
// for(let heading of h1){
//     heading.innerHTML = "<i>originHead</i>"
// }

const allLinks = document.querySelectorAll("a");
// for(let link of allLinks){
//     link.innerText = "I AM A LINK";
// }





