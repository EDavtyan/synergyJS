class Book {
    constructor(Id) {
        this.id = Id;
        this.title = nameGenerator(5, 25);
        this.author = nameGenerator(5, 25);
        this.pageCount = Math.floor(getRandomArbitrary(20, 500));
        this.content = nameGenerator(200, 2000);
    }
}