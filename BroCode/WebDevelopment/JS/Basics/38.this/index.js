// The 'this' keyword refers to the object it belongs to
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // "Hello, John"
// 'this' in a method refers to the object
let car = {
    make: "Toyota",
    model: "Camry",
    getDetails: function() {
        return this.make + " " + this.model;
    }
};
console.log(car.getDetails()); // "Toyota Camry"
// 'this' in a function (non-method) refers to the global object (or undefined in strict mode)
function showThis() {
    console.log(this);
}
showThis(); // In browser: Window object
// 'this' in an event handler refers to the element that received the event
document.getElementById("myButton").addEventListener("click", function() {
    console.log(this.id); // "myButton"
});

// 'this' can be explicitly set using call, apply, or bind