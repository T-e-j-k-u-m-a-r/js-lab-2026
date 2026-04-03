function checkVoteEligibility(age){


    return new Promise(function(resolve, reject){

        if (age >=18) {
                resolve(`Eligible ✅`)
        } else {
            
            reject(`Not Eligible ❌`)

        }

    })

}

checkVoteEligibility(80).then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error);
})