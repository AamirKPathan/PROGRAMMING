//hiding and showing HTML elements using JavaScript
const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('content');
toggleButton.addEventListener('click', () => {
    if (content.style.display === 'none') {
        content.style.display = 'block'; // Show the content
    } else {
        content.style.display = 'none'; // Hide the content
    }
});