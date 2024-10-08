// const arr = [1,2,3,4];


// console.log(arr.push(5)); //the push method is not defined on the arr but its defined on prototype
// console.log(arr);
//any of the method that we used will not be seen
//the __proto__ object contains all of the objects

//arr.includes(2); //this include method is not defined on every single array its defined
                // on the prototype object
                //prototypes are template objects


// Array.prototype;


//this is how to define a mehtod on any String Object
// String.prototype.yell = function () {
//     return`OMG!!!!${this.toUpperCase()}!!!!AGAHAGAHAG!`;
// }

//defining methods on Array

// Array.prototype.pop =  function () {
//     return `SORRY I WANT THAT ELEMENT!!!I WILL NEVER POP IT`
// }

//the prototype is the actual object where we add the mehtods or the properties

//__proto__ is a reference on the property name


//=======================================================================================
//=======================================================================================
//                                  Factory Functions
//=======================================================================================
//=======================================================================================

// function hex(r,g,b){
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) +b).toString(16).slice(1);
// }

// // hex(255,34,22);
// // '#ff2216'

// function makeColor (r,g,b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`
//     };
//     color.hex = function () {
//         const {r, g ,b } = this;
//         return '#'+ ((1 << 24) + (r << 16) + (g << 8) +b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(35,255,150);
// firstColor.hex();



//=======================================================================================
//=======================================================================================
//                                  Constructor Functions
//=======================================================================================
//=======================================================================================
//this is a contrcutor functions,,,, it creates a new object with the new keyword...
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     console.log(this);
// }

// // without the new keyword this refers to the window object
// new Color(24,233,223);


// Color.prototype.rgb = function () {
//     const {r,g,b} = this;
//     return `rgb(${r},${g},${b})`
// };

// Color.prototype.hex = function () {
//     const {r, g ,b } = this;
//     return '#'+ ((1 << 24) + (r << 16) + (g << 8) +b).toString(16).slice(1);
// }

// Color.prototype.rgba = function (a=1.0) {
//     const {r,g,b} = this;
//     return `rgb(${r},${g},${b},${a})`
// }

//=======================================================================================
//=======================================================================================
//                                  JavaScript Classes
//=======================================================================================
//=======================================================================================
// class Color {
//     constructor (r,g,b) {
//         console.log("inside the constructor function");
//         console.log(r,g,b);
//     }
// }

// const c1 = new Color(244,32,23);

//=======================================================================================
//=======================================================================================
//                                  More Practice with Classes
//=======================================================================================
//=======================================================================================





//=======================================================================================
//=======================================================================================
//                                  The Extend and Super keyword
//=======================================================================================
//=======================================================================================

class Pet {
    constructor(name,age) {
        console.log("Inside the Pet Constructor")
        this.name = name;
        this.age  = age;
    }
    eat () {
        return`${this.name} is eating`;
    }
}
//super refernces the parent class
class Cat extends Pet{
    constructor (name,age,liveLeft = 9) {
        console.log("INSIDE THE CAT CONSTRUCTOR!")
        super(name,age);
        this.liveLeft = liveLeft;
    }
    meow() {
        return 'MEOW';
    }
}

class Dog extends Pet{
    bark () {
        return 'WHOOP';
    }
}
//=======================================================================================
//=======================================================================================
//=======================================================================================
//=======================================================================================

