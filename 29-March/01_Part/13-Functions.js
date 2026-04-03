/**
 * Functions: 
 * 
 * 1. Function statement
 * 2. Function expression
 * 3. Parameterized Function
 * 4. Non-Parameterized Functions
 * 5. Anonymous Function
 * 6. IIFE(Immediatly Invoked Function Expression)
 * 7. Call back function
 * 8. Higher Order function
 * 
 */


// 1. Function statement 

// function func1(){
//     console.log(`1. I am from Function Declaration or Function Statement`);
// }

// func1();

// // 2. Function expression 

// const fE = function(){
//     console.log(`2. I am from Function Expression`);
// }

// fE();

// // 3. Parameterized Function 

// function pF(text){
//     console.log(`3. ${text}, I am from Parameterized Function`);
// }

// pF(`Hello`);

// // 4. Non-Parameterized Functions

// function npF(){
//     console.log(`4. I am from non-parameteriezed function`)
// }

// npF();

/**
 * 5. Anonymous Function
 * 6. IIFE(Immediatly Invoked Function Expression)
 * 7. Call back function
 * 8. Higher Order function
 */

// 5. Anonymous Function

// const f1 = function anonymousFunction(){

//     console.log(`Hi, I am from Anonymous function`);

// }

// f1();

//6. IIFE - Immediatly invoked function expression 

// const iife_demo = function (){
//     console.log(`Hi, I am from IIFE`);
// }();


//7. Nested Functions

// function f1(){
//     console.log(`F1`);

//     function f2(){
//         console.log(`F2s`);
//     }
// }

// 8. Argument and Parameters in Functions

// function demo(args){
//     console.log(args)
// }


// demo(`Hello`);

// 9. Function returning a value and Function not returning a value 

// function f1(){
//     return "Hello QA"
// }

// const f1_obj = f1();
// console.log(f1_obj)

//10 & 11. Call back function & Higher Order Function

// function f1(callback){
    
//     console.log(`I am from f1`)
//     callback();

// }

// function f2(){

//     console.log(`I am from f2`);

// }

// f1(f2);

//Note: Here f1 is higher order function and f2 is the call back function





