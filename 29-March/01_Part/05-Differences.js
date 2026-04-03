/**
 * 1. Difference between var, let and const 
 * 2. Difference between undefined and not defined 
 * 3. Difference between == and ===
 */

/**
 * 
 * 1. 
 * 
 * Var 
 * 
 * 1. Its having global & and / block scope when declared
 * 2. It gets participated in Hoisting and the value is stored global scope
 * 3. Var not recommended to use in programming instead let and const are recommended
 * 4. Declaration and Initialization can be done in different steps
 * 
 * Ex: var b = 20l
 * 
 * let
 * 
 * 1. Its having functional scope
 * 2. It gets participated in Hosting, But remains in Temporal Dead Zone (TDZ)
 * 3. let is recommended to use when variable declaration is needed and value needs to be re-assigned
 * 4. Declaration and Initialization can be done in different steps. 
 * 
 * Ex: let a = 10;
 * 
 * const
 * 
 * 1. Its having functional scope 
 * 2. It gets participated in Hoisting, But the remains in Temporal Dead Zone (TDZ)
 * 3. const is recommended to use when variable declaration is needed and value should remain unchanged
 * 4. Declaration and Initialization should be done at the same line
 * 
 * Ex: const pi = 3.14;
 * 
 * //---------------------------------------------------------------//
 * 
 * 2. 
 * 
 * Undefined and Not defined 
 * 
 * a. When a variable is declared with keyword var and iniatialized a value
 *      But its usage or calling happens before it, 
 *      The default value stored in memory creation phase is undefined. 
 *      
 *      Its also a keyword in Javascript
 * 
 * b. Not defined state is not present in Javascript
 *    Its not a keyword in Javascript
 * 
 * 
 * //---------------------------------------------------------------//
 * 
 * 3. 
 * 
 * a. == This is used for comparing a value between 2 values. 
 * b. === This is used to compare both value and datatype. 
 *  
 * 
 * //---------------------------------------------------------------//
 * 
 * 
 */