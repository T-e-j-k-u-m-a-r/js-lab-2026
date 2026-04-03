// Using Promise to handle aysnchronous nature of Javascript using 
// Note: 

// 1. Remove callbacks

function orderDosa(){

return new Promise(function(resolve, reject){
        setTimeout(() => {

        resolve(`Dosa Ordered`)
        
    }, 2000);
})

}

function orderIdly(){

    return new Promise(function(resolve, reject){
            setTimeout(() => {
        
        resolve(`Idly Ordered`);

        // reject(`Idly not availble ❌`)

    }, 2000);
    })

}

function orderCoffee(){

return new Promise(function(resolve, reject){
        setTimeout(() => {

        resolve(`Coffee Ordered`)

    }, 2000);
})

}

function payBill(){
    
return new Promise(function(resolve, reject){
        setTimeout(() => {
       
            resolve(`Bill Paid`)
        
    }, 2000);
})

}

// Implementing promise using then() and catch() block

orderDosa().then(function(result){

    console.log(result);
    return orderIdly();

}).then(function(result){

    console.log(result);
    return orderCoffee();

}).then(function(result){

    console.log(result);
    return payBill();

}).then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error)
})