// Hoisting: The phenomenon of accessing the global variable and function before they are initiated. 


// console.log(a);
// a1_greet();

// var a = 10;
// function a1_greet(){
//     console.log(`Hello JS`)
// }

/**
 * Does hoisting work only the variable declared using keyword - var ? 
 * 
 * No: Its does work for both const and let. 
 * 
 */

// Temporal Dead Zone or TDZ in short: The phase where the variable declared with keyword let/const wait till there are initialized for usage. 

// let a = 10;

const a = 10;

function a1_greet(){
    console.log(`Hello: JS`);
}

console.log(a);
a1_greet(); 




