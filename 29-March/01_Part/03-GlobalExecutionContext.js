/**
 * Everything that happens in JS is within the Global execution context
 * 
 * There are 2 phases: 
 * 
 * 1. Memory Creation: 
 *      
 *      In this phase, The whole program is skimmed and the global variables and functions are 
 *          initialized inside the global execution context scope. 
 * 
 *      Note: Variable defined with keyword var is initiated with value: undefined in this phase
 *              Function is completely stored as it is.      
 * 
 * 2. Thread of Execution: 
 * 
 *      The actual execution of the code happens in this phase. 
 * 
 * 
 * Note: Function execution scope gets defined when any function is invoked in JavaScript. 
 *          And this is independent of the global execution context. 
 * 
 *          Which means even in here, There will be 2 phases. 
 * 
 *          1. Memory creation 
 *          2. Thread of execution
 * 
 *          A separate function execution context is called into 
 *           stack along side global exeuction context in this case. 
 * 
 */


