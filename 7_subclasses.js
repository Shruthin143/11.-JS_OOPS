class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year
    }
    getSummary(){
        return `the title of the book is ${this.title} and published in the year ${this.year}`
    }
}

//Magazine subclasses
class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year)
        this.month = month
    }
}
const mag1 = new Magazine('book one', 'shruthin', 2030, 'jan')
console.log(mag1);
console.log(mag1.getSummary());