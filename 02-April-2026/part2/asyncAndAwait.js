// Async and await is implemented using try and catch block within the async function 

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

// Creating a async function

async function orderFood(){

    try {
        
        const dosaOrdererdStatus = await orderDosa();
        console.log(dosaOrdererdStatus);


        const idlyOrdererdStatus = await orderIdly();
        console.log(dosaOrdererdStatus);

        const coffeeOrdererdStatus = await orderCoffee();
        console.log(dosaOrdererdStatus);

        const billPaidStatus = await payBill();
        console.log(billPaidStatus)

    } catch (error) {
     
        console.log(error)
    }
}

orderFood();
