//Closures: The ability of the inner function having access to its lexical environment 

function parent(){

    var parentProperty = "Gold";

    function child(){

    var childProperty = "Toy Gold";

        console.log(`Parent Property = `+parentProperty);
        console.log(`Child Property = `+childProperty);

    }

    return child;
}


let parentObj = parent();
parentObj();