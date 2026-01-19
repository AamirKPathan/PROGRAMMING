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
console.log("Second User's Email:", users[1].email);
console.log("Second User's Age:", users[1].age);
console.log("Total Users:", users.length); // 2
users.forEach((user, index) => {
    console.log(`User ${index + 1}: Name=${user.name}, Age=${user.age}, Email=${user.email}`);
});
// Output:
// First User's Name: Alice
// First User's Email:
// First User's Age: 28
// Second User's Name: Bob
// Second User's Email:
// Second User's Age: 34
// Total Users: 2
// User 1: Name=Alice, Age=28,
// User 2: Name=Bob, Age=34,
//
// Note: The email fields are empty in the output because the provided email addresses were placeholders.
const fruits = [{nam}, {}, {}];