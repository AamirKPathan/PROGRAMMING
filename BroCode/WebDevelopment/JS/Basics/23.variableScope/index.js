// variable scope = where a variable is recognized and accesible (loval vs global scope)
// local scope = variable is recognized only inside the block it was created in { ... }
// global scope = variable is recognized everywhere in the document
let x = 12; // global scope
function myFunction() {
    let y = 10; // local scope
    console.log(x + y); // 22
}
myFunction();
console.log(x); // 12
// console.log(y); // error: y is not defined
(function(name) {
    console.log('Hello, ' + name + '! This function runs immediately upon definition!');
}
)('Grace');
// block scope = variable is recognized only inside the block it was created in { ... }
if (true) {
    let a = 5; // block scope
    console.log(a); // 5
}
// console.log(a); // error: a is not defined
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
// console.log(i); // error: i is not defined