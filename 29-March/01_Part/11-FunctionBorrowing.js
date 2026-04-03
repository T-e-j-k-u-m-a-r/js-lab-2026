//Function Borrowing using call, apply and bind
//The ability of borrowing the function between objects using call(), apply() and bind() methods is called Function Borrowing

const book1 = {
    bookName: "Chemistry"
}

const book2 = {
    bookName : "Maths"
}

function bookDetails(author, printYear){
    console.log(`Book Name: `+this.bookName);
    console.log(`Author Name: `+author);
    console.log(`Print Year: `+printYear);
}

// Using call() 

bookDetails.call(book1,"Shravya",2025);

console.log(`------------- Using call() method get completed here -----------------`);

// Using apply()

bookDetails.apply(book1,["Ahtharv",2025]);

console.log(`------------- Using apply() method get completed here -----------------`);

//Using bind()

let bookDetailsObj = bookDetails.bind(book1,"Jeevitha",2026);
bookDetailsObj();

console.log(`------------- Using bind() method get completed here -----------------`);
