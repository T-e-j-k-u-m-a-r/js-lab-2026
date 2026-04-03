// Callbackhell -> The phenomenon of nested callback function resulting in Pyramid of DOOM that causes the Inversion of control 


function orderDosa(callback){

    setTimeout(() => {

        console.log(`Dosa Ordered`);
        callback();
        
    }, 2000);

}

function orderIdly(callback){

    setTimeout(() => {
        
        console.log(`Idly Ordered`);
        callback();

    }, 2000);

}

function orderCoffee(callback){

    setTimeout(() => {

        console.log(`Coffee Ordered`)
        callback();

    }, 2000);

}

function payBill(){
    
    setTimeout(() => {
        console.log(`Bill Paid`)
        
    }, 2000);

}

// Pyramid of DOOM 

orderDosa(function(){
    orderIdly(function(){
        orderCoffee(function(){
            payBill();
        })
    })
})


