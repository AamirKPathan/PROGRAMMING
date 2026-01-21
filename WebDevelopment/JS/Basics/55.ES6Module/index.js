//ES6 Module = A file that contains code that can be exported to and imported from other files

//Exporting a function
export function add(a, b) {
    return a + b;
}

//Exporting a constant
export const PI = 3.14159;
//Exporting a class
export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return PI * this.radius * this.radius;
    }
}

//Default export
export default function subtract(a, b) {
    return a - b;
}
//--- IGNORE ---
//End of file