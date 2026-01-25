// STEP 1 Create and add new HTML elements using JavaScript
const newDiv = document.createElement('div'); // Create a new div element
newDiv.innerHTML = '<h2>This is a new heading</h2><p>This paragraph was added using JavaScript.</p>'; // Add HTML content
document.body.appendChild(newDiv); // Append the new div to the body
// STEP 2 Add Attributes
newDiv.setAttribute('class', 'new-content'); // Add a class attribute
newDiv.setAttribute('id', 'content-1'); // Add an id attribute
// STEP 3 APPEND ELEMENT TO DOM
const anotherDiv = document.createElement('div'); // Create another div element
anotherDiv.textContent = 'This is another div added to the DOM.'; // Set text content
document.body.appendChild(anotherDiv); // Append to the body
// STEP 4 CHANGE EXISTING HTML CONTENT
const heading = document.querySelector('h1'); // Select the first h1 element
if (heading) {
    heading.textContent = 'Updated Heading Text'; // Change the text content
    heading.style.color = 'blue'; // Change the style
}
// STEP 5 MODIFY ATTRIBUTES OF EXISTING ELEMENTS
if (heading) {
    heading.setAttribute('class', 'updated-heading'); // Modify class attribute
    heading.id = 'main-heading'; // Modify id attribute
}
// STEP 6 REMOVE ELEMENTS FROM THE DOM
const paragraph = document.querySelector('p'); // Select the first p element
if (paragraph) {
    paragraph.remove(); // Remove the paragraph from the DOM
}
// This code demonstrates how to dynamically add, change, and remove HTML elements
// using JavaScript and DOM manipulation techniques.
// It covers creating new elements, setting attributes, changing existing content,
// and removing elements from the document.
// These operations are fundamental for building interactive web applications
// that respond to user actions and update the UI dynamically.