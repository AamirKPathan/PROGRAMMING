// fetch = function used for making HTTP requests

// The fetch function in JavaScript is used to make HTTP requests to servers. It returns a Promise that resolves to the Response object representing the response to the request.
// Example of using fetch to get data from an API:
async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Data fetched from API:', data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
fetchDataFromAPI();
// In this example, we define an async function fetchDataFromAPI that uses fetch to get a post from a placeholder API. We check if the response is okay, then parse the JSON data and log it to the console. If there's an error during the fetch operation, it is caught and logged.