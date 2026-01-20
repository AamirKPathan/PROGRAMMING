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
