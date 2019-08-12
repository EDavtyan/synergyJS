class library {
    constructor() {
        this.authorToBooks = new Map(); // key:author, value:bookArray[]
        this.authorToNumberOfBooks = new Map(); //key:author, value:numberOfBooks
        this.booksInStock = new Map(); // key:bookId, value:book
        this.takenBooks = new Map(); // key:bookId, value:book
        this.librarians = [];
    }

    registerBook = function (book) {
        if (!this.authorToBooks.has(book.author)) {
            this.authorToBooks.set(book.author, []);
            this.authorToNumberOfBooks.set(book.author, 0);
        }

        let count = this.authorToNumberOfBooks.get(book.author); // getting the counter as to increment it

        this.authorToBooks.get(book.author).push(book);
        this.authorToNumberOfBooks.set(book.author, ++count);
        this.booksInStock.set(book.id, book);
    }

    getAllAuthors = function () {
        return this.authorToBooks.keys();
    }

    getBooksOfAuthor = function (author_name) {
        return this.authorToBooks.get(author_name);
    }

    authorReport = function () {
        return this.authorToNumberOfBooks;
    }

    takeBook = function (bookId) {
        if(this.booksInStock.has(bookId)) {
            this.takenBooks.set(bookId, this.booksInStock.get(bookId))
            this.booksInStock.delete(bookId);
        }
    }

    returnBook = function (bookId) {
        if(this.takenBooks.has(bookId)) {
            this.booksInStock.set(bookId, this.takenBooks.get(bookId))
            this.takenBooks.delete(bookId);
        }
    }

    getAllTakenBooks = function () {
        return this.takenBooks.values();
    }

    //(NEW) LIBRARIAN PART

    addLibrarian = function (librarian) {
        this.librarians.push(librarian);
    }

    editLibrarian = function (librarian, val1, val2) {
        if(+val1 !== Nan) {
            librarian.phone = val1;
        } else if(+val2 !== Nan) {
            librarian.phone = val2
        }
        if (val1 !== undefined && +val1 === Nan) {
            librarian.email = val1;
        } else if(val2 !== undefined && +val2 === Nan) {
            librarian.email = val2;
        }
    }

    removeLibrarian = function (librarian) {
        let eq = Object.toJSON(librarian);
        for (let i = 0; i < this.librarian.length; i++) {
            if(eq === Object.toJSON(this.librarians[i])) {
                this.librarians[i].remove();
            }
        }
    }

//    TODO How to find a good substring algo?


}