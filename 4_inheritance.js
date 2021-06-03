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


//inherit prototype
magazine.prototype = Object.create(Book.prototype)
//Magzine constructor

function magazine(title, author, year, month){
    Book.call(this, title, author, year);

    this.month = month 
}

const mag1 =new magazine('first mag','shruthin',2018,'jan')
console.log(mag1.getSummary());