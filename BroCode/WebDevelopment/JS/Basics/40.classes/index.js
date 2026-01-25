// classes in JavaScript
// A class is a blueprint for creating objects with predefined properties and methods.
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person1 = new Person('John', 'Doe', 30);
console.log(person1.firstName); // John
console.log(person1.fullName()); // John Doe
const person2 = new Person('Jane', 'Smith', 25);
console.log(person2.firstName); // Jane
console.log(person2.fullName()); // Jane Smith
const person3 = new Person('Alice', 'Johnson', 28);
console.log(person3.firstName); // Alice
console.log(person3.fullName()); // Alice Johnson
const person4 = new Person('Bob', 'Brown', 35);
console.log(person4.firstName); // Bob
console.log(person4.fullName()); // Bob Brown