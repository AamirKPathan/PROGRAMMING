//JSON = javascript object notation
//It is a lightweight data interchange format that is easy for humans to read and write
//and easy for machines to parse and generate.
//JSON is often used to transmit data between a server and a web application as text.
//Example of JSON data
fetch("names.json")
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById("nameList");

        data.names.forEach(person => {
            const li = document.createElement("li");
            li.textContent = person;
            list.appendChild(li);
        });
    })
    .catch(error => console.error("Error loading JSON:", error));
