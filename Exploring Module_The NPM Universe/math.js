const add = (x,y) => x+y;

const PI = 3.1459;

const square = (x) => x * x;

//shortcut method to do this
exports.add = add;
exports.PI = PI;
exports.square = square;


//the content of the file are not automatically availabe,,,, we need to export it

// module.exports = "Hello";
//only this hello will be exported nothing else

//the module.exports is an object by default

//1st Method to Export Module
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

//2nd Method to export is
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }

// module.exports= math;

//3rd Method to export is to write the module.export with each function explicitly
// module.exports.add = (x,y) => x+y;

// module.exports.PI = 3.1459;

// module.exports.square = (x) => x * x;



