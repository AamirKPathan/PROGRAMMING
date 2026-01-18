// getter = special method that makes a property read-only
// setter = special method that allows you to set the value of a property
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    set area(value) {
        const ratio = this.width / this.height;
        this.height = Math.sqrt(value / ratio);
        this.width = ratio * this.height;
    }
}
const rect1 = new Rectangle(4, 5);
console.log(rect1.area); // 20
rect1.area = 40;
console.log(rect1.width); // 8
console.log(rect1.height); // 5
const rect2 = new Rectangle(3, 6);
console.log(rect2.area); // 18
rect2.area = 54;
console.log(rect2.width); // 9
console.log(rect2.height); // 6
