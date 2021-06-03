//Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year
    
}

//Prototype

Book.prototype.getSummary = function(){
    return `the title of the book is ${this.title} and published in the year ${this.year}`
}

Book.prototype.getAge = function(){
    const years = new Date().getFullYear()

    const old = years - this.year
    return `${old}`
}

//Manipulating data through Prototype

Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}
//Instantiating object

const book1 = new Book('book one', 'shr', 2017)
console.log(book1.getSummary());
const book2 = new Book('book two', 'shruthin', 2021)
console.log(book2.getSummary());
console.log(book1.getAge());

console.log(book2);
book2.revise(2030)
console.log(book2);


