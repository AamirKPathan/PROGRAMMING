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
// You can also use fetch to send data to an API using POST method:
async function postDataToAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Data posted to API:', data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
postDataToAPI();
// In this example, we send a POST request to the same placeholder API with some JSON data. We set the method to 'POST', specify the content type in the headers, and include the data in the body of the request. The response is then parsed and logged similarly to the GET request.