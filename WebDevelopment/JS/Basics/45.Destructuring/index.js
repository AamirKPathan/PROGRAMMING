// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] perform array destructuring
// {} perform object destructuring

// array destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor); // red
console.log(secondColor); // green
console.log(thirdColor); // blue
const [primary, , tertiary] = colors; // skip the second element
console.log(primary); // red
