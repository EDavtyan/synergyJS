let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function nameGenerator(from, till) {
    let size = Math.floor(getRandomArbitrary(from, till));
    let j;
    let name = "";

    for (let i = 0; i <= size; i++) {
        j = Math.floor(getRandomArbitrary(0, 25));
        name += alphabet[j];
    }
    return name;
}

function phoneNumberGenerator() {
    let number = "0"
    for (let i = 0; i < 8; i++) {
        number += Math.floor(getRandomArbitrary(0,9));
    }
}

function emailGenerator() {

}

function hexCounter() {
    let counter = 0;
    counter = counter.toString(16);
    
    return function () {
        return (++counter).toString(16);
    }
}

// PROGRAM GOES FROM HERE

let Id = hexCounter();
let lib = new library();


for (let i = 0; i < 1000; i++) {
    lib.registerBook(new Book(Id.call()));
}





// console.log(nameGenerator());

//library object, register book titile pagecount

