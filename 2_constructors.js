//Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year
    this.getSummary = function(){
        return `the title of the book is ${this.title} and published in the year ${this.year}`
    }
}

//Instantiating object

const book1 = new Book('book one', 'shr', 2017)
console.log(book1.getSummary());
const book2 = new Book('book two', 'shruthin', 2021)
