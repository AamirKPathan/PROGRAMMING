// nested objects are objects that contain other objects as properties
const user = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    hobbies: ["reading", "traveling", "gaming"],
    contact: {
        email: "something@example.com",
        phone_number: "123-456-7890"
    }
};
// Accessing nested object properties
console.log("User's Name:", user.name); // John Doe
console.log("User's City:", user.address.city); // Anytown
console.log("User's Email:", user.contact.email); // something@example.com
console.log("User's Phone Number:", user.contact.phone_number); // 123-456-7890