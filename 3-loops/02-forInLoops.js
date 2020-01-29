/*
    - great for counting key/value pairs in an object. Properties in an object are what is called enumerable
        - for in loops will iterate over an objects enumerable properties
*/

let student = {
    name: "peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

console.log(student.degree); // dot notation

for (let item in student) {
    // console.log(item);
    console.log(student[item]); // object bracket notation
}

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];

console.log(dogArray[2]); // bracket notation

for (dog in dogArray) {
    // console.log(dog);
    console.log(dogArray[dog]);
}

/*
    Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/

let name = 'qUINN';
let capName;

for (let i in name) {
   if (i == 0) {
       capName = name[i].toUpperCase();
   } else {
       capName += name[i].toLowerCase();
   }
}

console.log(capName);