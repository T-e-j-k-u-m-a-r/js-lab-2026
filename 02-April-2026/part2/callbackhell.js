// Call back hell: The nested callback resulting in Pyramid of DOOM that caused of Inversion of Control


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
        console.log(`Coffee Ordered`);
        callback();
    }, 2000);

}

function payBill(){

        setTimeout(() => {
        console.log(`Bill Paid`);

    }, 2000);

}

// Pyramid of DOOM -> Causing the Inversion of control 

orderDosa(function(){
    orderIdly(function(){
        orderCoffee(function(){
            payBill();
        })
    })
})

