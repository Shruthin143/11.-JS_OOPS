//Object of Protos

const bookProtos = {
    getSummary: function(){
        return `the title of the book is ${this.title} and published in the year ${this.year}`
    },

    getAge: function(){
        const years = new Date().getFullYear()
    
        const old = years - this.year
        return `${old}`
    }
}

//Create Object

const book1 = Object.create(bookProtos)
book1.title = 'Book one'
book1.author = 'shruthin3'
book1.year = 2030

console.log(book1);