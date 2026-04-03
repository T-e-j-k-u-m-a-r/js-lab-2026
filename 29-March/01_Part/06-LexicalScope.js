// Lexical Scope: The ability of the inner function to access its environmental property


function parent(){

    var parentProperty = "Gold";

    function child(){

    var childProperty = "Toy Gold";

        console.log(`Parent Property = `+parentProperty);
        console.log(`Child Property = `+childProperty);

    }

    child();
}


parent();


