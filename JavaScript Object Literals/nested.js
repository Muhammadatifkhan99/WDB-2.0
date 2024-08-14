let users = [
    {
        id: 1,
        name: "Alice",
        age: 28,
        address: {
            street: "123 Maple Street",
            city: "Springfield",
            state: "IL",
            postalCode: "62701"
        },
        hobbies: [
            { name: "Reading", frequency: "daily" },
            { name: "Hiking", frequency: "weekly" },
            { name: "Cooking", frequency: "monthly" }
        ]
    },
    {
        id: 2,
        name: "Bob",
        age: 34,
        address: {
            street: "456 Oak Avenue",
            city: "Metropolis",
            state: "NY",
            postalCode: "10001"
        },
        hobbies: [
            { name: "Cycling", frequency: "weekly" },
            { name: "Photography", frequency: "monthly" }
        ]
    },
    {
        id: 3,
        name: "Charlie",
        age: 22,
        address: {
            street: "789 Pine Lane",
            city: "Smallville",
            state: "KS",
            postalCode: "66002"
        },
        hobbies: [
            { name: "Gaming", frequency: "daily" },
            { name: "Music", frequency: "daily" },
            { name: "Running", frequency: "weekly" }
        ]
    }
];

console.log(users);
