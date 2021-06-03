class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year
        }
    getSummary(){
        return `the title of the book is ${this.title} and published in the year ${this.year}`
    }
    revise (newYear){
        this.year = newYear;
        this.revised = true;
    }
    static topBookstore(){
        return `'this is static'`
    }
}

//instantiate Book

const book1= new Book('book one', 'shruthin_modern', 2016)
console.log(book1);
book1.revise(2040)
console.log(book1);
console.log(Book.topBookstore());

