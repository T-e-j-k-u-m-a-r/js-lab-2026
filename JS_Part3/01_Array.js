// Array Introduction

// Array declaration with size: 
// const a1 = new Array(5);

// console.log(a1)

// // Fill all the values with Apples
// a1.fill('🍎')

// console.log(a1)

// from()
// const cityName = "Bengalure";
// console.log(cityName);

// const modified_cityName = Array.from(cityName);
// console.log(modified_cityName);


// of()

// const new_array = Array.of("🍇","🍈","🍉","🍋‍🟩","🍎","🍍","🍌");
// console.log(new_array);

// Mutation methods: push(), pop(), shift() and unshift()

// const numbers = [10,20,30,40,50];
// console.log(numbers)

// numbers.push(100);

// console.log(numbers.length);
// console.log(numbers)

// numbers.pop();
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// numbers.unshift('New');
// console.log(numbers);

// find(), findIndex(), findLast(), findLastIndex()

// const numbers = [100,10,20,30,40,55,10,20,10,40,55,20,30,50,40,77,90];

// console.log(`Array length of = `+numbers.length)

// // console.log(numbers);

// console.log(numbers.find(function(ele){
//     return ele > 70;
// })) //100

// console.log(numbers.findIndex(function(ele){
//     return ele == 55;
// })) //5

// console.log(numbers.findLast(function(ele){
//     return ele > 70;
// })) //90

// console.log(numbers.findLastIndex(function(ele){
//     return ele > 70;
// }))//16

// slice() and splice()


const cityName = ["Delhi", "Gujarat", "MP", "Kolkata", "Punjab"];

// console.log(cityName.slice(1,4))    //  ["Gujarat", "MP", "Kolkata"]
// console.log(cityName.slice(1,3))    //  ["Gujarat", "MP"]

// console.log(cityName.splice(2,2,"Bengalure","Mangalore"));          //["MP", "Kolkata"] 

// console.log(cityName);              //["Delhi", "Gujarat","Bengalure","Mangalore","Punjab"]

// console.log(cityName.splice(2,1,"Chennai"));                 //Bengalure

// console.log(cityName);                              //["Delhi", "Gujarat","Chennai","Mangalore","Punjab"]

// map(), reduce() and filter()

//-------------------------------------------------------------------------------------------------------------//

//filter(): 🚀

// const numbers = [1,2,3,4,5,0];

// const result = numbers.filter(function(ele){

//     return ele <3;

// })

// console.log(result)

//map(): 🚀

// const numbers = [1,2,3,4,5];

// const result = numbers.filter(function(ele){

//         return (ele % 2 == 0)

// }).map(function(ele){
//     return ele = ele * 10;
// });

// console.log(result);

//reduce(): 🚀

// const numbers = [1,2,3,4,5];

// const result = numbers.reduce(function(acc,pv){

//     return acc = acc + pv;

// },0)

// console.log(result);

//-------------------------------------------------------------------------------------------------------------//

// forEach(): 🚀

// const numbers = [1,2,3,4,5];
// console.log(numbers);


// console.log(numbers.forEach(function(ele){
//     console.log(ele+10);
// }));

// console.log(numbers)

//-------------------------------------------------------------------------------------------------------------//

//toString(), toReversed(), toSorted(), toSpliced()

// const names = ["Athrav", "Shravya", "Jeevitha", "Tejkumar"];
// const nums = [60,70,50,10,20,50];

// console.log(`-----------------------------------------------------------------`);

// console.log(names);
// console.log(nums);

// const toString_demo = names.toString();
// console.log(toString_demo);

// const toSorted_demo = names.toSorted();
// console.log(toSorted_demo);

// const toSpliced_demo = names.toSpliced(1,3,"Kempaiah");
// console.log(names);
// console.log(toSpliced_demo);

// const toReversed_demo = names.toReversed();
// console.log(toReversed_demo)

// const sorted_array_nums_ascending = nums.toSorted(function(a,b){
//     return a-b;
// });

// console.log(sorted_array_nums_ascending);

// const sorted_array_nums_descending = nums.toSorted(function(a,b){
//     return b-a;
// });

// console.log(sorted_array_nums_descending);



//-------------------------------------------------------------------------------------------------------------//

//some(), every()

// const nums = [10,20,30,40,50];

// console.log(nums.some(function(ele){

//     return ele > 40;

// }))


// console.log(nums.every(function(ele){
//     return ele > 4;
// }))




//-------------------------------------------------------------------------------------------------------------//















