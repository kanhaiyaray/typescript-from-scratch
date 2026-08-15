// TypeScript Tuple

// A tuple has a fixed number of elements
// and each position has a specific type.

// 1. Basic tuple
let tupleUser: [string, number] = [
    "Aman",
    25
];

console.log(tupleUser);

// 2. Access tuple elements
console.log(tupleUser[0]);
console.log(tupleUser[1]);

// 3. Different types

let tupleProduct: [string, number, boolean] = [
    "Laptop",
    75000,
    true
];

console.log(tupleProduct);
 
// 4. Modify tuple element

tupleUser[0] = "Rahul";
tupleUser[1] = 30;

console.log(tupleUser);

// 5. Tuple with string and boolean

let tupleStatus: [string, boolean] = [
    "Active",
    true
];

console.log(tupleStatus);

// 6. Tuple array

let tupleUsers: [string, number][] = [
    ["Aman", 25],
    ["Rahul", 30],
    ["Mohit", 28]
];

console.log(tupleUsers);


// 7. Access tuple array

console.log(tupleUsers[0]);
console.log(tupleUsers[0][0]);
console.log(tupleUsers[0][1]);