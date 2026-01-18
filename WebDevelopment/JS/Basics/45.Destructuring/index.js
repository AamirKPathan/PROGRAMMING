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
console.log(tertiary); // blue
const [first, ...restColors] = colors; // rest operator
console.log(first); // red
console.log(restColors); // ['green', 'blue']
// default values
const [color1, color2, color3 = 'yellow', color4 = 'purple'] = colors;
console.log(color3); // yellow
console.log(color4); // purple
// swapping variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1

// object destructuring
const person = {
    name: 'Alice',
    age: 28,
    city: 'New York'
};
const { name, age, city } = person;
console.log(name); // Alice
console.log(age); // 28
console.log(city); // New York
// renaming variables
const { name: fullName, age: yearsOld } = person;
console.log(fullName); // Alice
console.log(yearsOld); // 28
// default values
const { name: personName, country = 'USA' } = person;
console.log(personName); // Alice
console.log(country); // USA
// nested object destructuring
const employee = {
    id: 101,
    personalInfo: {
        name: 'Bob',
        position: 'Developer'
    }
};
const { personalInfo: { name: empName, position } } = employee;
console.log(empName); // Bob
console.log(position); // Developer
// function parameter destructuring
function displayPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayPerson(person); // Name: Alice, Age: 28
// array parameter destructuring
function sum([x, y, z]) {
    return x + y + z;
}
console.log(sum([1, 2, 3])); // 6
// mixed destructuring
const data = {
    id: 1,
    info: ['red', 'large', 'round']
};
const { id, info: [color, size, shape] } = data;
console.log(id); // 1
console.log(color); // red
console.log(size); // large

console.log(shape); // round
// rest operator in object destructuring
const { name: personName2, ...otherDetails } = person;
console.log(personName2); // Alice
console.log(otherDetails); // { age: 28, city: 'New York' }
// destructuring in loops
const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Mike', age: 35 }
];
for (const { name, age } of people) {
    console.log(`${name} is ${age} years old.`);
}
// John is 30 years old.
// Jane is 25 years old.
// Mike is 35 years old.
// nested array destructuring
const rgb = [255, [0, 128], 64];

const [red, [green, blue]] = rgb;
console.log(red); // 255
console.log(green); // 0
console.log(blue); // 128
// default values in nested destructuring
const nestedArray = [1, [2]];
const [num1, [num2, num3 = 3]] = nestedArray;
console.log(num1); // 1
console.log(num2); // 2
console.log(num3); // 3
// destructuring with Maps
const userMap = new Map();
userMap.set('id', 1);
userMap.set('name', 'Charlie');
const { id: userId, name: userName } = Object.fromEntries(userMap);
console.log(userId); // 1
console.log(userName); // Charlie
// destructuring with Sets

