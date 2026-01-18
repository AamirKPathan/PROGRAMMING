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
        return `${this.name} roars.`;
    }
}
const lion1 = new Lion('Simba');
console.log(lion1.speak()); // Simba roars.
// The Lion class inherits from the Animal class and overrides the speak method.
class Tiger extends Animal {
    speak() {
        return `${this.name} growls.`;
    }
}
const tiger1 = new Tiger('Shere Khan');
console.log(tiger1.speak()); // Shere Khan growls.
// The Tiger class inherits from the Animal class and overrides the speak method.
class Wolf extends Animal {
    speak() {
        return `${this.name} howls.`;
    }
}
const wolf1 = new Wolf('Akela');
console.log(wolf1.speak()); // Akela howls.
// The Wolf class inherits from the Animal class and overrides the speak method.
class Fox extends Animal {
    speak() {
        return `${this.name} barks slyly.`;
    }
}
const fox1 = new Fox('Foxy');
console.log(fox1.speak()); // Foxy barks slyly.
// The Fox class inherits from the Animal class and overrides the speak method.