// constructor = special method for defining the properties and methods of an object

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