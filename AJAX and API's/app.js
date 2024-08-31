// const data = {
//     "type": "general",
//     "setup": "Did you hear about the Mexican train killer?",
//     "punchline": "He had loco motives",
//     "id": 91
// }


// const parsedData =JSON.parse(data);

// console.log(parsedData);
// parsedData.setup
// parsedData.punchline


// const dog = {breed: 'lab',color: 'black',isAlive: 'true',owner: undefined};

// JSON.stringify(dog);
//=======================================================================================
//=======================================================================================
//                                 HTTP VERBS
//=======================================================================================
//=======================================================================================

// GET requests retrieve data out of an API




//=======================================================================================
//=======================================================================================
//                                 HTTP STATUS CODES
//=======================================================================================
//=======================================================================================
//CODE THAT COMEBACKS AS AN HTTP RESPONSE

//INFROMATIONAL RESPONSE -> 100-199;
//SUCCESSFUL RESPONSE -> 200-299;
//REDIRECTION MESSAGES -> 300-399;
//CLIENT SIDE ERROR -> 400-499;
//SERVER SIDE ERROR -> 500-599;

//=======================================================================================
//=======================================================================================
//                                 HTTP HEADERS
//=======================================================================================
//=======================================================================================
//accept ---------> application/json

//=======================================================================================
//=======================================================================================
//                                 XHR(xmlhttprequests)
//=======================================================================================
//=======================================================================================

//the original way of sending requests from JS
// const req  = new XMLHttpRequest();

// req.onload = function() {
//     console.log("Its Loaded");
//     const data = JSON.parse(this.responseText);
//     console.log(data.name, data.height);
// }
// req.onerror = function () {
//     console.log("ERROR!!!!");
//     console.log(this);
// }

// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();

// const req = new XMLHttpRequest();
// req.onload = function(){
// }
// req.onerror = function () {
// }
// req.open("GET","url");
// req.send();

//=======================================================================================
//=======================================================================================
//                                 The Fetch
//=======================================================================================
//=======================================================================================
// https://swapi.dev/api/people/1



//This request depends on the first to happens....
// fetch("https://swapi.dev/api/people/1")
//     .then((res) => {
//     console.log("RESOLVED: ",res);
//     // res.json().then(data => console.log("JSON",data))
//     return res.json();
// })
//     .then(data => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2")
// })
//     .then((res) => {
//     console.log("RESOLVED: ",res);
//     // res.json().then(data => console.log("JSON",data))
//     return res.json();
// })   
//     .then(data => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/3")
// })
//     .then((res) => {
//     console.log("RESOLVED: ",res);
//     return res.json();
//     })
//     .then(data => {
//     console.log(data);
//     //if you want to make a fouth request uncomment this code
//     //return fetch("https://swapi.dev/api/people/4")
//     })
//     .catch((e) => {
//     console.log("ERROR!!",e);
// })


// https://swapi.dev/api/people/1

// const loadStarWarsPeople = async (id) => {
// try {
//     const res = await fetch(`https://swapi.dev/api/people/${id}`);
//     const data = await res.json();
//     console.log(data);
//     // const res1 = await fetch(`https://swapi.dev/api/people/${id}`);
//     // const data1 = await res1.json();
//     // console.log(data1);
// }
// catch(e){
//     console.log(e);
// }
// }

// loadStarWarsPeople(1);
// loadStarWarsPeople(2);

//=======================================================================================
//=======================================================================================
//                                 Axios
//=======================================================================================
//=======================================================================================
// https://swapi.dev/api/people/1

// axios.get("https://swapi.dev/api/people/1")
// .then(res => {
//     console.log("RESPONSE:",res);
//     console.log(res.data);
// })
// .catch(e => {
//     console.log("ERROR!!!",e);
// })


const getStarWarsPerson = async () => {
    const person = await axios.get("https://swapi.dev/api/people/1");
    const data = person.data;
    console.log(data);
}
getStarWarsPerson();


//=======================================================================================
//=======================================================================================
//                                 The Fetch
//=======================================================================================
//=======================================================================================

//=======================================================================================
//=======================================================================================
//                                 The Fetch
//=======================================================================================
//=======================================================================================






