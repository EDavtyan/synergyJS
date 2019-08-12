const Book = require('book');
console.log(Book);

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function nameGenerator() {
    let size = Math.floor(getRandomArbitrary(5, 15));
    let j;
    let name = "";

    for (let i = 0; i <= size; i++) {
        j = Math.floor(getRandomArbitrary(0, 25));
        name += alphabet[j];
    }
    return name;
}



function Library(){
    this.books = new Map();
    this.blah = books.values();

    this.takenBooks = new Map();


    this.registerBook = function(book) {
        if(!this.books.has(book.author)) {
            this.books.set(book.author, []);
        }
        this.books.get(book.author).push(book);
    },

    this.getAllAuthors = function() {
        return this.books.keys();
    },

    this.getBooksOfAuthor = function(author_name) {
        return this.books.get(author_name);
    },

    this.authorReport = function() {

    },

    this.takeBook = function(bookId) {
        for (let i in books.values()) {
            for(let j in i) {
                if(bookId = j.id) {

                }
            }
        }

        books.value()
    },

    this.returnBook = function(bookID) {

    },
    this.getAllTakenBooks = function() {

    }
}



console.log(nameGenerator());

//library object, register book titile pagecount

