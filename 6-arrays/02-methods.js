let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hot Dog'];
console.log('orignial array:', food);

food.push('Pizza'); // appends or 'pushes' an item into the array. Appends to the end
console.log('push:', food);

food.splice(1, 1, "Bananas"); // (position / how many to delete / what to add in its place)
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie'); // (position / how many to delete (0) / what to add in its place)
console.log('splice 2:', food);

food.pop(); // removes the last item in the array
console.log('pop:', food);

food.shift(); // removes the first item in the array
console.log('shift:', food);

food.unshift('Popcorn', 'Steak'); // unshift adds 1 or more items to the beginning of the array
console.log('unshift:', food);

console.log('original array', food);