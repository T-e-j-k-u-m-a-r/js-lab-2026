/**
 * Anything that happens within JavaScript is inside the Global Execution context. 
 * And the execution of the .js file required an JavaScript runtime environment which JavaScript provides. 
 * 
 * JS Engines are different for different platforms. 
 * 
 * 1. Platform 1 - Windows : Node
 * 2. Platform 2 - Browser : Its by default provided by the browser manufacture companies. 
 *      Ex: 
 *              a. Google Chrome: v8
 *              b. Internet Explorer : Chakra
 *              c: Firefox: Spider Monkey
 * 
 * 3. Execution of the .js file has 2 phase 
 *              a. Memory creation phase
 *              b. Thread of execution phase
 * 
 * 4. JRE consists of below things when we address it from synchronous and single threaded point of view of JavaScript. 
 *          Btw, JavaScript is synchronous and single threaded programming language. 
 * 
 *          Its the below super feature that make JS support asynchronous operations. 
 *
 *              a. callback hell.
 *              b. promise.
 *              c. async and await.
 *              
 *          which is again backed up by callstack and event loop along with callback queue and priority queue.
 */