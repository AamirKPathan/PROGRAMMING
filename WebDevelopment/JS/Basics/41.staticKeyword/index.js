// static = A keyword used to define static methods or properties in a class.
// Static methods and properties belong to the class itself, not to any specific instance of the class.

class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static pi = 3.14159;
}
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.subtract(10, 4)); // 6
console.log(MathUtils.pi); // 3.14159
const mathInstance = new MathUtils();
// console.log(mathInstance.add(5, 3)); // Error: mathInstance.add is not a function
// console.log(mathInstance.pi); // undefined
// Static methods and properties can be accessed directly through the class without creating an instance.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    static area(circle) {
        return MathUtils.pi * circle.radius * circle.radius;
    }
}
const circle1 = new Circle(5);
console.log(Circle.area(circle1)); // 78.53975
// The area method is static and can be called using the Circle class directly.
// It takes an instance of Circle as an argument to calculate the area.
