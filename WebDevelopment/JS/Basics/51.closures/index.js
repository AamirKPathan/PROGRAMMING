//closures are functions defined inside other functions
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}
const newFunction = outerFunction('outside');
newFunction('inside');
//or you can call it like this
outerFunction('outside')('inside');
//closures can remember the environment in which they were created
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const counter = makeCounter();

console.log(counter()); // 1

console.log(counter()); // 2
console.log(counter()); // 3
//each counter has its own lexical environment
const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter1()); // 3
console.log(counter2()); // 2
//closures are useful for data privacy
function createPerson(name, age) {
    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        }
    }
}
const person = createPerson('Alice', 30);
console.log(person.getName()); // Alice
console.log(person.getAge()); // 30
console.log(person.name); // undefined
console.log(person.age); // undefined
//the name and age variables are private and cannot be accessed directly
//only through the provided methods
//closures can also be used to create function factories
function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12
console.log(add5(10)); // 15
console.log(add10(10)); // 20
//here, makeAdder creates functions that add a specific value to their argument
//the value of x is remembered by the returned function
//this allows us to create specialized functions easily
//closures are a powerful feature of JavaScript that enable data encapsulation and function factories
//understanding closures is essential for mastering JavaScript and writing efficient, maintainable code
