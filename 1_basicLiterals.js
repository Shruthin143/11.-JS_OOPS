// const s1 = 'hello'
// console.log(typeof s1);

// const s2 = new String('Hello')
// console.log(typeof s2);

// console.log(window);
// alert(1)

// console.log(navigator.appVersion);

const book1 = {
    title: 'Book one',
    author:'Shr',
    year: 2017,
    getSummar: function(){
        return `the title of the book is ${this.title} and published in the year ${this.year}`
    }
}

console.log(book1.getSummar());

const book2 = {
    title: 'Book two',
    author:'Shruthin',
    year: 2021,
    getSummar: function(){
        return `the title of the book is ${this.title} and published in the year ${this.year}`
    }
}

console.log(book2.getSummar());

//if we want to add new book it is really a pain therefore it is suggested to use constructors
