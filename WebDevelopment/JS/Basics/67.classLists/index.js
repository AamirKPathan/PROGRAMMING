// classList = Element property in JavaScript
// It returns the class names of an element as a DOMTokenList object
// It has methods to add, remove, toggle, and check for classes on an element

// add()
// remove()
// toggle()
// contains()
//replace()

const element = document.querySelector('.my-element');
console.log('Initial class list:', element.classList);
// Adding a class
element.classList.add('new-class');
console.log('After adding new-class:', element.classList);
// Removing a class
element.classList.remove('old-class');
console.log('After removing old-class:', element.classList);
// Toggling a class
element.classList.toggle('toggle-class');
console.log('After toggling toggle-class:', element.classList);