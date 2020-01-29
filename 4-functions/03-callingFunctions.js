function hi() {
    console.log('hello');
}

// hi;
// hi();
// console.log(hi);
console.log(hi());

// as soon as out parser sees that there is a function invocation, that happens immediately.

//Challenge: create a function that, when invoked, lists out numbers 1-10

function numbers() {
    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
}

numbers();

//Challenge: given the array, create a function that lists out the values individually

let arr = ['This', 'is', 'really', 'cool'];

function arrange() {
    for (let word of arr) {
        console.log(word)
    }
}

arrange();