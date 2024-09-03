const arr = [1,2,3,4];


console.log(arr.push(5)); //the push method is not defined on the arr but its defined on prototype
console.log(arr);
//any of the method that we used will not be seen
//the __proto__ object contains all of the objects

arr.includes(2); //this include method is not defined on every single array its defined
                // on the prototype object
                //prototypes are template objects


Array.prototype;


//this is how to define a mehtod on any String Object
String.prototype.yell = function () {
    return`OMG!!!!${this.toUpperCase()}!!!!AGAHAGAHAG!`;
}

//defining methods on Array

Array.prototype.pop =  function () {
    return `SORRY I WANT THAT ELEMENT!!!I WILL NEVER POP IT`
}

//the prototype is the actual object where we add the mehtods or the properties

//__proto__ is a reference on the property name