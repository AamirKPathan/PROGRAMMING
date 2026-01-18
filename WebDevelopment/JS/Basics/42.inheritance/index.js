// inheritance allows a new class to inherit properties and methods from an existing class

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise.`;
    }
}
class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}
const animal1 = new Animal('Generic Animal');
console.log(animal1.speak()); // Generic Animal makes a noise.
const dog1 = new Dog('Rex');
console.log(dog1.speak()); // Rex barks.
// The Dog class inherits from the Animal class and overrides the speak method.
class Cat extends
