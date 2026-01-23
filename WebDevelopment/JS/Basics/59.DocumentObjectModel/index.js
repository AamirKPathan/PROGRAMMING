// DOM = Document Object Model
// The DOM is a programming interface for web documents.
// It represents the page so that programs can change the document structure, style, and content.
// The DOM represents the document as nodes and objects.
// This allows programming languages to interact with the page content dynamically.
// Example: Accessing and modifying DOM elements using JavaScript
// Select an element by its ID
const myElement = document.getElementById('myElement');
// Change the content of the selected element
myElement.innerHTML = 'Hello, DOM!';
// Change the style of the selected element
myElement.style.color = 'blue';
// Add a new element to the DOM
const newElement = document.createElement('p');
