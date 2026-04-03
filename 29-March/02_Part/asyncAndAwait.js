function orderDosa(){

   return new Promise(function(resolve, reject){

    setTimeout(() => {
        resolve(`Dosa Ordered`)

    }, 2000);
   })

}

function orderIdly(){

return new Promise(function(resolve, reject){
            setTimeout(function(){
            resolve(`Idly Ordered`);
    },2000)
})

}

function orderCoffee(){

    return new Promise(function(resolve,reject){
                setTimeout(function(){
            resolve(`Coffee Ordered`)
           
    },2000)

    })

     
}

function payBill(){
   
    return new Promise(function(resolve,reject){
         setTimeout(function(){
        
            // resolve(`Bill paid`);

            reject(`UPI is not working, Please try other mode of payment`)

    },2000)
    })

}

async function orderFood(){

   try {
     const orderDosaStatus = await orderDosa();
    console.log(orderDosaStatus);

    const orderIdlyStatus = await orderIdly();
    console.log(orderIdlyStatus);

    const orderCoffeeStatus = await orderCoffee();
    console.log(orderCoffeeStatus);

    const billPaidStatus = await payBill();
    console.log(billPaidStatus);
   } catch (error) {
    console.log(error)
   }

}

orderFood();