// Promise - Handling Async operation using promise, Where we use then() and catch()

// Note: Optionally we can use finally() as well, But we need to return something from the catch block so that we can call finally(). 

function orderDosa(){

    return new Promise(function(resolve, reject){
            setTimeout(() => {
        
                resolve(`Dosa Ordered`)

    }, 2000);
    })

}

function orderIdly(){


    return new Promise(function(resolve,reject){
                setTimeout(() => {
       
                    resolve(`Idly Ordered`)

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

return new Promise(function(resolve,reject){
            setTimeout(() => {
        // resolve(`Bill Paid`);

        reject(`UPI is not working, Try some other mode of payment`)

    }, 2000);
})

}

// Implementing Promise using then() and catch() block. 

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
    console.log(result)
}).catch(function(error){

    console.log(error);
})

