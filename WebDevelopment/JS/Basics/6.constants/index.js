// Const cant be changed once defined

/*
let pi = 3.14; // This is a variable
let radius;
let circumference;

radius = window.prompt("Enter the radius of the circle:");
radius = Number(radius);

circumference = 2 * pi * radius;
console.log("Circumference of the circle is: " + circumference);

//Const can be used to prevent accidental or malicious changes to values that should remain constant throughout the program. 
*/

const GRAVITY = 9.81;
let mass;
let weight;
//mass = window.prompt("Enter the mass of the object in kg:");
document.getElementById("myButton").onclick = function() {
    mass = document.getElementById("myNumber").value;
    mass = Number(mass);
    weight = mass * GRAVITY;
    console.log("Force affecting the object is: " + weight + " N");
    document.getElementById("myH3").textContent = "Force affecting the object is: " + weight + " N";
}