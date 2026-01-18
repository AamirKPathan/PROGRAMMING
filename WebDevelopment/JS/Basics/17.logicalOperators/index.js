// logical operators = used to combine or manipulate boolean values

// &&  (AND)  => true if both operands are true
// ||  (OR)   => true if at least one operand is true
// !   (NOT)  => inverts the boolean value of the operand

let a = 5;
let b = 10;
let c = 15;
console.log("a > b && a < c:", a > b && a < c); // false && true => false
console.log("a < b || a > c:", a < b || a > c); // true || false => true
console.log("!(a < b):", !(a < b)); // !(true) => false
console.log("!(a > b):", !(a > b)); // !(false) => true
console.log("a < b && b < c:", a < b && b < c); // true && true => true
console.log("a > b || b < c:", a > b || b < c); // false || true => true
console.log("!(a == 5):", !(a == 5)); // !(true) => false
console.log("!(b == 5):", !(b == 5)); // !(false) => true
console.log("a < b && a < c:", a < b && a < c); // true && true => true
console.log("a > b || a < c:", a > b || a < c); // false || true => true
console.log("!(a != 5):", !(a != 5)); // !(false) => true
console.log("!(b != 10):", !(b != 10)); // !(false) => true
console.log("a == 5 && b == 10:", a == 5 && b == 10); // true && true => true
console.log("a == 5 || b == 5:", a == 5 || b == 5); // true || false => true
console.log("!(c > 20):", !(c > 20)); // !(false) => true
console.log("!(c < 20):", !(c < 20)); // !(true) => false
// End of logical operators examples
