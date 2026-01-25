// string slicing
// creating a substring

const fullName = "Aamir Khan Pathan";

let firstName = fullName.slice(0, 5); // from index 0 to 5 (not including 5)
let lastName = fullName.slice(11); // from index 11 to end
console.log("First Name:", firstName);
console.log("Last Name:", lastName);

// or

const anotherFullName = "Salman Khan";
let spaceIndex = anotherFullName.indexOf(" "); // find index of space
let fName = anotherFullName.slice(0, spaceIndex);
let lName = anotherFullName.slice(spaceIndex + 1);
console.log("First Name:", fName);
console.log("Last Name:", lName);

// using substring method