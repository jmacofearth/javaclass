console.log("Hello World");
console.log("My Name is John");

//let is the keyword that tells JS we are setting up a variable
//x is the "name" of the variable, 
//= is known as the assignment operator
// 5 is the "literal" value

let x = 5;

// when you "set up" a variable, that's known as a declaration

let y;

y = 3;

let z = 6 + 7;

// when you set a value that's known as initialiization

console.log(y)

const MY_CONST = 7;

console.log(MY_CONST)

// TYPES

// below is a sting
//a series of characters and numbers
// surrounded by quotes

let myString = "This is a string value";

console.log(myString);

// below we have a number
// numbers will generally respect arithemtic
let myNumber = 100;
let myDecimalValue = 0.45;

// below are boolean values
// true or false, nothing else
let myBoolean = true;
let myOtherBoolean = false;

let myVariable = "abc";
console.log(typeof myVariable);

myVariable = 1
console.log(typeof myVariable);

let coercedVariable = 7 + 7 + 7
console.log(`the value of coercedVariable is ${coercedVariable}`);

// i++ is the same as saying i = i + 1
for (let i = 0; i <= 9; i++) {
    console.log(i)
}

// example 1

let numberOfCups = 4;
    if (numberOfCups < 3) {
    console.log("We need more coffee.")
}   else {
    console.log("I think I'm okay for now")
}

// example 2

let milesDriven = 501;
    if (milesDriven < 500) {
        console.log("My car doesn't need an oil change.")
    }
    if (milesDriven > 500) {
        console.log("Yes, I think I need an oil change.")
    }



