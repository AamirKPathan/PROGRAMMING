// arrays of objects are arrays that contain objects as elements
const users = [
    {
        name: "Alice",
        age: 28,
        email: "something@example.com"
    }
]
console.log("First User's Name:", users[0].name); // Alice
console.log("First User's Email:", users[0].email); //
console.log("First User's Age:", users[0].age); // 28
users.push({
    name: "Bob",
    age: 34,
    email: "somethingelse@example.com",
});
console.log("Second User's Name:", users[1].name);