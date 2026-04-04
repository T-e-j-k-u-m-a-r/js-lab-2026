/**
 * 
 * from()
 * of()
 * 
 * concat()
 * copyWithin()
 * 
 * entries()
 * every()
 * some()
 * 
 * fill()
 * 
 */

// 1. from and of

// const name = 'Interview';
// const result = Array.from(name);

// console.log(result);

// const output = Array.of(1,2,3,4,5);
// console.log(output);

// 2.  * concat() and copyWithin()

const a1 = [1,2,3,4,5];

// const a2 = [10,20,30,40];

// const concatinated_array = a1.concat(a2);
// console.log(concatinated_array);

// const result1 = a1.copyWithin(0,1,3);       //[2,3,3,4,5]
// console.log(result1)

// const result2 = a1.copyWithin(1,2,4);       //[2,3,4,4,5]
// console.log(result2);

// const result3 = a1.copyWithin(-4,-3,-1);    //[2,4,4,4,5]
// console.log(result3);

// const result4 = a1.copyWithin(2,3,4);       //[2,4,4,4,5]
// console.log(result4)

// Note: In case of copyWithin() -> The array copies the elements into the same array using the argument passed

// 3. every() & some()

// const every_result = a1.every(function(ele){
//     return ele > 10;
// })

// console.log(every_result);

// const some_result = a1.some(function(ele){
//     return ele > 4;
// })

// console.log(some_result);

// 4. fill()

// const fill_result = a1.fill('🍎',1,4);      //[1,'🍎','🍎','🍎',5]
// console.log(fill_result);



