// NodeList = Static collection of HTML elements by (id, class, tag name etc)
// It is similar to an array but it does not have all array methods
// It is a collection of nodes (elements) returned by methods like getElementsByClassName, getElementsByTagName etc.
// It is not an array but can be converted to an array using Array.from() or spread operator [...nodeList]
// Example:
const items = document.getElementsByClassName('item'); // NodeList
console.log(items); // HTMLCollection of elements with class 'item'
console.log(items[0]); // Accessing first element
console.log(items.length); // Length of NodeList

// Converting NodeList to Array
const itemsArray = Array.from(items);
console.log(itemsArray); // Now it's an array
itemsArray.forEach(item => console.log(item)); // Using array methods
// Alternatively using spread operator
const itemsArray2 = [...items];
console.log(itemsArray2); // Now it's an array
itemsArray2.forEach(item => console.log(item)); // Using array methods
// Note: NodeList is live in some cases (like getElementsByClassName) and static in others (like querySelectorAll)
// Live NodeList updates automatically when the DOM changes, static NodeList does not
// Example of live NodeList
const liveItems = document.getElementsByClassName('live-item'); // Live NodeList