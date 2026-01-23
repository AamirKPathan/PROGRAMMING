// STEP 1 Create and add new HTML elements using JavaScript
const newDiv = document.createElement('div'); // Create a new div element
newDiv.innerHTML = '<h2>This is a new heading</h2><p>This paragraph was added using JavaScript.</p>'; // Add HTML content
document.body.appendChild(newDiv); // Append the new div to the body
// STEP 2 Add Attributes
newDiv.setAttribute('class', 'new-content'); // Add a class attribute
newDiv.setAttribute('id', 'content-1'); // Add an id attribute
// STEP 3 APPEND ELEMENT TO DOM