/*
    - arrays are containers that hold a list of items
    - denoted by []
    - can hold multiple datatypes
    - each item, regardless of datatype, is separated by a comma
*/

let list = ['orange', 'banana', 'apple'];
console.log(list[1]);

/*
    - when calling an array, we can append square brackets onto the end of our array with the index number we want to reference. This is called square bracket notation
    - javascript counts starting at 0
*/

let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Taylor', 'Will']]
// console.log(typeof students);
console.log(students instanceof Array); // instanceof operator is used to check the type of a variable we're working with
console.log(students[2]);

// Challenge: dive into the nested array and pull the value 'Will', print out "Hello Will!"

let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Taylor', 'Will']]
console.log(students[6][2]);

let name = students[6][2];
console.log(`Hello ${name}!`);