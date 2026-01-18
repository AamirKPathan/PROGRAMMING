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
    Animal {
    speak() {
        return `${this.name} meows.`;
    }
}
const cat1 = new Cat('Whiskers');
console.log(cat1.speak()); // Whiskers meows.
// The Cat class also inherits from the Animal class and overrides the speak method.
class Puppy extends Dog {
    speak() {
        return `${this.name} yaps.`;
    }
}
const puppy1 = new Puppy('Buddy');
console.log(puppy1.speak()); // Buddy yaps.
// The Puppy class inherits from the Dog class and overrides the speak method.
class Lion extends Animal {
    speak() {
        