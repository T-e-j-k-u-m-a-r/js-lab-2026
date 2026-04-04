/**
 * 
 * filter()
 * map()
 * reduce()
 * 
 * 
 * slice()
 * splice()
 * 
 * 
 * find()
 * findLast()
 * findIndex()
 * findLastIndex()
 * 
 * 
 * flat()
 * forEach()
 * reverse()
 * sort()
 * 
 * 
 * push()
 * pop()
 * shift()
 * unshift()
 * 
 * 
 * length
 * 
 */

// const array_sample1 = [10,20,30,40,50,20,1,2,3,4];

// console.log(array_sample1.reverse());

// // sort ascending 

// const sort_ascending = array_sample1.sort(function(a,b){
//     return a - b;
// })

// console.log(sort_ascending)


// //sort descending

// const sort_descending = array_sample1.sort(function(a,b){
//     return b - a;
// })

// console.log(sort_descending)


/**
 * find()
 * findLast()
 * findIndex()
 * findLastIndex()
 */

// console.log(array_sample1.find(function(ele){
//     return ele == 20;
// }))

// console.log(array_sample1.findLast(function(ele){
//     return ele == 20;
// }))

// console.log(array_sample1.findIndex(function(ele){
//     return ele == 20;
// }))

// console.log(array_sample1.findLastIndex(function(ele){
//     return ele == 20;
// }))


// const array_sample2 = [10,20,30,40,50,[1,2,3,4,5],[1,2,3,[4,5]]];

// console.log(array_sample2);
// console.log(array_sample2.flat(Infinity));


// map(), filter() and reduce()

// let numbers = [10,20,30,40,50];

// console.log(numbers.map(function(ele){
//     return ele + 1;
// }))

// console.log(numbers.filter(function(ele){
//     return ele > 30;
// }))

// console.log(numbers.reduce(function(acc,curVal)
// {
//     return acc+curVal;
// },0))


let numbers = [10,20,30,40,50];

// slice 

// console.log(numbers.slice(0,3));        //  [10,20,30]
// console.log(numbers.slice(1,4));        //  [20,30,40]
// console.log(numbers.slice(1,3));        //  [20,30]


// splice
// console.log(numbers.splice(0,3,'🍎'))                   
// console.log(numbers);       //[`🍎`,40,50]

// console.log(numbers.splice(1,1,'🍎','🍇'))             
// console.log(numbers);        //[10,'🍎',🍇,30,40,50]


// console.log(numbers.splice(1,2,'🍍','🍌'))            
// console.log(numbers);        //[10,'🍍','🍌',40,50]



