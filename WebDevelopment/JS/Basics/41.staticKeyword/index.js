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
