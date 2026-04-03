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
    console.log(error);
})