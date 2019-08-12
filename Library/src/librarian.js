class librarian {
    constructor() {
    this.firstName = nameGenerator(5, 25);
    this.secondName = nameGenerator(5, 25);
    this.phone = phoneNumberGenerator();
    this.email = emailGenerator();
    }

}