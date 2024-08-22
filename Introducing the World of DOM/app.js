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

// let allh1 = document.querySelector('h1');

// // queryselector can be used to select by any CSS style we want
// // id, class , tag and much more
// //query selector just gives us the first match 

// document.querySelector("p:nth-of-type(2)")


// //querySelectorAll

// //same idea, but returns the collection of matching elements


// document.querySelectorAll("p");
// document.querySelectorAll("img");
// document.querySelectorAll("a");
// //CSS DECENDENT SELECTORS

// const links = document.querySelectorAll("p a");


// // for(let link of links){
// //     console.log(link.href);
// // }

// const h1 = document.querySelector("h1");

// const originHead = h1.innerText;
// //  h1.innerHTML = originHead;
// // h1.innerText = "nothing to say now";
// // for(let heading of h1){
// //     heading.innerHTML = "<i>originHead</i>"
// // }

// const allLinksa = document.querySelectorAll("a");
// // for(let link of allLinks){
// //     link.innerText = "I AM A LINK";
// // }


// const input =  document.querySelector("input[type = 'text']");

// const Eggimg = document.querySelectorAll('a');



// const eggImg = document.querySelector('img');
// eggImg.src = 'https://devsprouthosting.com/images/chicken.jpg';
// eggImg.alt = 'chicken';



/////////////////////////////////////////////////////////////////////////////////////////


//          Changing Styles
//
//
// const heading1 = document.querySelector('h1');

// heading1.style.color; //this will return an empy object

// //only works when the style/color is applied inline.

// // heading1.style.color = "green"
// // heading1.style.fontSize = '3em';


// const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//     link.style.color = 'blue';
//     link.style.textDecorationColor = "magenta";
//     link.style.textDecorationStyle = "wavy";
// }

// //we can only get the inline styles of the HTML, to get the style sheet styles we need to use the following

// window.getComputedStyle(allLinks);


//classList
//applying a class via a javascript

// const h2 = document.querySelector('h2');

// console.log(h2.setAttribute('class'));

// const head2 = document.querySelector('h2');

// head2.getAttribute('class');
// head2.setAttribute('class' , 'purple');// Assigning class purple to the h2 and removing the old class 
// head2.setAttribute('class', 'border'); //this will remove the old class from it

//assigning both classes to the html element

// head2.setAttribute('class', `${purple} border`);// can be done using the class list

//classlist

// head2.classList;

// head2.classList.add('purple');
// head2.classList.add('border');
// head2.classList.remove('border');
// head2.classList.contains('border'); //returns true/false value
// head2.classList.toggle('border'); //on offs a class from a specific element
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Traversing the Parent Children elements

// const boldelement = document.querySelector('b');

// boldelement.parentElement;
// boldelement.parentElement.parentElement.parentElement;


// const paragraph = boldelement.parentElement;


// const squareimg = document.querySelector('.square');
// squareimg.parentElement;
// squareimg.nextSibling;
// squareimg.previousSibling;
// squareimg.nextElementSibling;
// squareimg.previousElementSibling;

/////////////////////////////////////////////////////////////////////////////////////////


//creating elements and appending it to the body


// const newImg = document.createElement('img'); //makes an images//its an object
// // console.dir(newImg);
// newImg.src = 'https://images.unsplash.com/photo-1724094505377-ac01c7813010?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

//appending the element to the document
// document.body.appendChild(newImg); //append this image as the last child of the body.....

// newImg.classList.add('square');

// ///make an h3 

// const newh3 = document.createElement('h3');

// newh3.innerText = "Welcome to Zootopia";
// document.body.appendChild(newh3);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//          append(); more flexible, insert more than one thing at a time 
//
//

// const paragraph1 = document.querySelector('p');

// paragraph1.append("Hey I am a new text here");
//we can append more than one thing..

////////////////////////////////////////////////////////////////////////////////////////////


///             prepend():::insert things as the first child of something
///
///

// const newB = document.createElement('b');
// newB.append("Hey!!!!!!!!!!!!!!!!!!");
 
// paragraph1.prepend(newB);

///////////////////////////////////////////////////////////////////////////////

//  insertAdjacentElements
// insert it aferends(when the target element ends) or before( before the target elements starts)
//


const h2 = document.createElement("h2");

h2.append("Are Addorable checkens");

const h1 = document.querySelector("h1");

h1.insertAdjacentElement("afterend",h2);

h1.nextElementSibling


//////////////////////////////////////////////

//  after()

const h3 = document.createElement('h3');
h3.append("I am an h3");
h1.after(h3);

///////////////////////////////////////////////////////////////////////////////


//Removing Element
//child elements
// removeChild() ---> requires us to call the method on the parent and remove the child element......

const firstLi = document.querySelector('li');
const ul = firstLi.parentElement
ul.removeChild(firstLi);

/////////////////////////////////////////////////////////////////////////////////////////

/// remove()....we call this method on the actual thing we want to remove
const img = document.querySelector("img");
img.remove();


