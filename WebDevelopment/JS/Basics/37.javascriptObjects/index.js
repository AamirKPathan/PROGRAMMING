// object a collection of related properties and methods

let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
console.log(person.name); // Accessing property
person.greet(); // Calling method
// Creating object using constructor
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
console.log(car.make + " " + car.model);
// Creating object using Object.create
let animal = Object.create(null);
animal.type = "Dog";
animal.sound = function() {
    console.log("Woof!");
};
animal.sound();
console.log(animal.type);
// Nested objects

let student = {
    name: "Alice",
    age: 22,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};
console.log(student.address.city);