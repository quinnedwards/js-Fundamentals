//
function hi(name) {
    // let name = 'Quinn'
    console.log(`Hello, ${name}`);
} 

hi('Quinn');

function quinn(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`)
}

quinn('sandwich');

function counter(number, string) {

    for (let i = 0; i<= number; i++){
        console.log(i);
    }

    console.log(string);
}


counter(10, 'hello');

/* Challenge: write a function that takes two parameters:
    - one parameter is for a first name,
    - the other parameter is for a last name,
    - have them come together in a variable inside the function
    - console.log 'Hello, my name is <your name>'
    - call (or invoke) you function
*/

function name(first, last) {
    let fullName = first + ' ' + last;
    console.log(`Hello, my name is ${fullName}`)
}

name('quinn', 'edwards');