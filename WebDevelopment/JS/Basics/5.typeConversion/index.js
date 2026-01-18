// type conversion = change the datatype of a value to another data type

// Declare Variables
let age = window.prompt("How old are you? "); // input is string data type
age = Number(age); // convert string to number data type
age += 1;
document.getElementById("myH1").textContent = "Next year you will be " + age + " years old.";