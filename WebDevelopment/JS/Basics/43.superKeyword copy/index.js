// super is used to call the constructor or access methods and properties of a parent class.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise.`;
    }
}
class Dog extends
    Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }
    speak() {
        return `${this.name} barks.`; // Override the speak method
    }
    info() {
        return `${super.speak()} It is a ${this.breed}.`; // Call the parent class method
    }
}
const dog1 = new Dog('Rex', 'German Shepherd');
console.log(dog1.speak()); // Rex barks.
console.log(dog1.info()); // Rex makes a noise. It is a German Shepherd.
const dog2 = new Dog('Buddy', 'Golden Retriever');
console.log(dog2.speak()); // Buddy barks.
console.log(dog2.info()); // Buddy makes a noise. It is a Golden Retriever.
const dog3 = new Dog('Max', 'Bulldog');
console.log(dog3.speak()); // Max barks.
console.log(dog3.info()); // Max makes a noise. It is a Bulldog.
const dog4 = new Dog('Charlie', 'Beagle');
console.log(dog4.speak()); // Charlie barks.
console.log(dog4.info()); // Charlie makes a noise. It is a Beagle.
const dog5 = new Dog('Rocky', 'Poodle');
console.log(dog5.speak()); // Rocky barks.
console.log(dog5.info()); // Rocky makes a noise. It is a Poodle.
const dog6 = new Dog('Duke', 'Boxer');
console.log(dog6.speak()); // Duke barks.
console.log(dog6.info()); // Duke makes a noise. It is a Boxer.
const dog7 = new Dog('Toby', 'Dachshund');
console.log(dog7.speak()); // Toby barks.
console.log(dog7.info()); // Toby makes a noise. It is a Dachshund.

const dog8 = new Dog('Zeus', 'Rottweiler');
console.log(dog8.speak()); // Zeus barks.
console.log(dog8.info()); // Zeus makes a noise. It is a Rottweiler.
const dog9 = new Dog('Apollo', 'Doberman');
console.log(dog9.speak()); // Apollo barks.
console.log(dog9.info()); // Apollo makes a noise. It is a Doberman.