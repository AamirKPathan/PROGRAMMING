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
newElement.innerHTML = 'This is a new paragraph added to the DOM.';
document.body.appendChild(newElement);
// Remove an element from the DOM
const elementToRemove = document.getElementById('elementToRemove');
document.body.removeChild(elementToRemove);
// This code demonstrates basic DOM manipulation using JavaScript.
// You can select, modify, add, and remove elements from the web page dynamically.
// Note: To see the effects of this code, it should be run in the context of a web page with appropriate HTML elements.

// Example Of DOM File Tree
// - document
//    - html
//       - head
//          - title
//       - body
