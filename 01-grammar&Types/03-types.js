/* 
BOOLEANS
    - a boolean has two possible values of either true or false
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
    NULL
        - null is an empty value. Think of it like an empty container: nothing is in it, but it still exists as a space to fill
*/

let empty = null
console.log(empty);

/*
    UNDEFINED
        - no value has been assigned and it does not act as an empty container, whereas null does.
*/

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

/*
    - Null is like a container with nothing in it
    - undefined is when a variable has never been set, or hasnt been created yet
*/

/*
    NUMBERS
        - numbers are literally jsut numbers. Don't need anything special to write them
*/

let degrees = 33;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise);

let rounded = 9999999999999999; // 16 9's
console.log(rounded);

let decimal = 0.2 + 0.1;
console.log(decimal);

/*
    STRINGS
        - strings are datatypes used to represent text and are wrapped in either single or double quotes
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

// numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

// if one datatype is a string, and one is a number, the compiler will assume you are trying to work with strings and convert the number into a string

/*
    OBJECTS
        - objects are used to store many values instead of a singular value
        - hold what are known as key/value pairs
*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}

console.log(frodo);
console.log(typeof frodo);

/*
    ARRAYS
        - arrays are containers that hold a list of items

        let list = [   'item1', 'item2', 'item3', ];
            (1)   (2)        (3)

            1. name of the array, or variable
            2. square brackets denote that it is an array
            3. each item, regardless of datatype, is separated by a comma
*/

let burritos = ['large', 4, true];
console.log(burritos);

console.log(typeof burritos);

let firstName = "Quinn";
let lastName = "Edwards";
let houseNumber = 12843;
let street = 'Glengary Drive';
let city = 'Fishers';
let state = 'Indiana';
let zipcode = 46038;

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode);

/*
    STRING: PROPERTIES
        - properties are qualities associated with a specific datatype
        - strings have properties, or qualities that are associated specifically with strings
*/

let myName = "Quinn";
console.log(myName.length); // Length will not start counting at 0

/*
    STRING: METHODS
        -methods are tools that can help us manipulate certain data
        - .property & .method()
            - no parenthesis for properties
*/

let myNameIs = "Quinn";
console.log(myNameIs.toUpperCase()); // toUpperCase is a method that changes a string to uppercase

let home = 'My home is Greenwood';
console.log(home.includes('Greenwood'));

let sent = 'this sentence will be split into individual parts';
console.log(sent.split(" "));

