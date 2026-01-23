// eventListener = listen for specific evenetts like mouse clicks, mouse moves, key presses, etc.
// common mouse events: click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove

const myBox = document.getElementById('myBox');
const myButton = document.getElementById('myButton');

myBox.addEventListener('click', event => {
    event.target.style.backgroundColor = 'tomato';
    event.target.textContent = 'Ouch🤕';
});
myBox.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'yellow';
    event.target.textContent = 'Mouse is over me!';
});