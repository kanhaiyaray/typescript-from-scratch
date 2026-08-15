// Nested Objects

// 1. Basic nested object

let nestedUser: {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
} = {
    name: "Aman",
    age: 25,
    address: {
        city: "Delhi",
        country: "India"
    }
};

console.log(nestedUser);

// 2. Access nested properties

console.log(nestedUser.name);
console.log(nestedUser.address.city);
console.log(nestedUser.address.country);

// 3. Modify nested property

nestedUser.address.city = "Mumbai";
console.log(nestedUser);

// 4. Multiple nested objects

let nestedEmployee: {
    name: string;
    department: {
        name: string;
        floor: number;
    };
    contact: {
        email: string;
        phone: string;
    };
} = {
    name: "Aman",
    department: {
        name: "IT",
        floor: 3
    },
    contact: {
        email: "aman@example.com",
        phone: "9876543210"
    }
};

console.log(nestedEmployee);

// 5. Access nested values

console.log(nestedEmployee.department.name);
console.log(nestedEmployee.department.floor);
console.log(nestedEmployee.contact.email);