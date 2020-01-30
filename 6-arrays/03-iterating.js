/*
    - the forEach() method executes a provided function once for each element in an array
    - the forEach() method does the same thing as a for loop or for of loop - both iterate over properties in an array
*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hot Dog'];

for (let i = 0; i < food.length; i++){
    console.log(food[i]);
}

food.forEach(foodItem => console.log(foodItem));

food.forEach(individualFoodItem => {
    console.log(individualFoodItem);
})

food.forEach(function(foodItem, index) {
    console.log(foodItem, index);
})
// foodItem = 'Pecan Pie';
// foodItem = 'Shrimp';
// foodItem = 'Quesadilla';

/*
Challenge:
    -(Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ['Uncut Gems', 'Good Time', 'Heaven Knows What', 'Daddy Long Legs'];

movies.push('Punch Drunk Love');
movies.splice(3, 1, 'Parasite');

// movies.forEach(movie => console.log(movie));

// movies.forEach(movie => {
//     console.log(movie);
// })

movies.forEach(function(movie){
    console.log(movie);
})