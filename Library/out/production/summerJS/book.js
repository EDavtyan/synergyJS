function Book() {
    this.id = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    this.title = nameGenerator();
    this.author = nameGenerator();
    this.pageCount = Math.floor(getRandomArbitrary(20, 500));
}

module.exports = Book;