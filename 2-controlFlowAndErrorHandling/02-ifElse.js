let weather = 30;

if (weather < 50) {
    console.log("Wear a jacket!");
} else {
    console.log("No jacket necessary");
}

let name = 'Quin Edwards';

if (name == 'Quinn Edwards') {
    console.log('Hello, my name is ' + name);
} else {
    console.log('Hello, is your name ' + name + '?');
    console.log(`Hello, is your name ${name}?`);
}

// BRONZE

let name = 'zAchARy';

if (name[0] == name[0].toUpperCase()) {
    console.log(name);
} else {
    console.log('hey, the string isnt written correctly')
}

// SILVER

let name = 'zAchARy';

if (name[0] == name[0].toUpperCase()) {
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase());
}

// GOLD

let name = 'zAchARy';

if (name[0] == name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log('console log #1:', isUppercase);
} else {
    let notUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console.log #2:', notUppercase);
}

//

let age = 19;

if (age >= 25) {
    console.log('You can rent a car!');
} else if (age >= 21) {
    console.log('You can drink!')
} else if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('Sorry, youre too young to do anything fun.');
}
