console.log("Hello");

let multiply = (x,y) => {
    return x * x;
}

let square = x => {
    return x*x;
}

function isRightTriangle(a,b,c) {
    return square(a) + square(b) === square(c);
}

isRightTriangle(3,4,5);