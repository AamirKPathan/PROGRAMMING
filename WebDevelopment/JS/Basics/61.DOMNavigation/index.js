// DOM Navigation = The process of moving through the DOM tree structure
// to access and manipulate elements, attributes, and text nodes.
// It allows developers to traverse parent, child, and sibling relationships
// between nodes in the DOM.
// Common DOM Navigation Properties and Methods:
// 1. firsElementChild: Accesses the first child element of a parent node.
// 2. lastElementChild: Accesses the last child element of a parent node.
// 3. nextElementSibling: Accesses the next sibling element of a specified node.
// 4. previousElementSibling: Accesses the previous sibling element of a specified node.
// 5. parentElement: Accesses the parent element of a specified node.
// 6. children: Returns a live HTMLCollection of child elements of a specified node.

// Example Usage:
const parent = document.getElementById('parent');
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
const nextSibling = firstChild.nextElementSibling;
const previousSibling = lastChild.previousElementSibling;
const parentElement = firstChild.parentElement;
const children = parent.children;
console.log(firstChild, lastChild, nextSibling, previousSibling, parentElement, children);
// This code demonstrates how to navigate through the DOM tree
// using various properties to access related elements.
// DOM Navigation is essential for dynamic web applications,
// allowing developers to manipulate the structure and content of web pages effectively.
