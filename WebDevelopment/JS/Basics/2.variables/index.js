//1. Declaration let x;
//2. Assignment x = 10;

/*
let x; //Every variable must be unique
x = 100;
*/

/*
let x = 100;
console.log(x); //100
*/

//let age = 16;
//let price = 9.99;
//let gpa = 4.0;

//console.log(typeof age);   //number
//console.log(typeof price); //number
//console.log(typeof gpa);   //number

//console.log(`You are ${age} years old.`);
//console.log(`The price is $${price}.`);
//console.log(`Your GPA is ${gpa}.`);


//let firstName = `Aamir`; //String
//let favoriteFood = `Biryani`; //String
//let email = `pathanaa2023@gmail.com`; //String

//console.log(typeof firstName); //string
//console.log(typeof favoriteFood); //string
//console.log(typeof email); //string

//console.log(`Hello, ${firstName}!`);
//console.log(`Your favorite food is ${favoriteFood}.`);
//console.log(`We will contact you at ${email}.`);

//let online = true; //Boolean
//let forSale = false; //Boolean
//let isStudent = true; //Boolean

//console.log(typeof online); //boolean
//console.log(typeof forSale); //boolean
//console.log(typeof isStudent); //boolean

//console.log(`The user is online: ${online}.`);
//console.log(`The item is for sale: ${forSale}.`);
//console.log(`The person is a student: ${isStudent}.`);

let fullName = `Aamir Khan Pathan`;
let age = 16;
let student = true;

document.getElementById(`p1`).textContent = `Your name is ${fullName}.`;
document.getElementById(`p2`).textContent = `You are ${age} years old.`;
document.getElementById(`p3`).textContent = `You are a student: ${student}.`;