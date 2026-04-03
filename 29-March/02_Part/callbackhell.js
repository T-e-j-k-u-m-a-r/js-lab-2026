function orderDosa(callback){

    setTimeout(function(){

        console.log(`Dosa Ordered`);
        callback();
    },2000)

}

function orderIdly(callback){

        setTimeout(function(){
            console.log(`Idly Ordered`);
            callback();
    },2000)

}

function orderCoffee(callback){

        setTimeout(function(){
            console.log(`Coffee Ordered`);
            callback();
    },2000)

}

function payBill(){
    setTimeout(function(){
        console.log(`Bill paid`)
    },2000)
}

//The nested callback in here results in which Pyramid of DOOM results in Invation of control

orderDosa(function()
{
    orderIdly(function(){
        orderCoffee(function(){
            payBill();
        })
    })
})
