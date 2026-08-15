// Optional Tuple Elements
// Optional tuple elements use ?

// 1. Optional age
let optionalUserTuple: [
    string,
    number?
] = ["Aman"];

console.log(optionalUserTuple);

// 2. With optional value
let optionalUserTuple2: [
    string,
    number?
] = [
    "Rahul",
    30
];

console.log(optionalUserTuple2);

// 3. Access optional element

console.log(optionalUserTuple[0]);
console.log(optionalUserTuple[1]);

// 4. Optional boolean
let optionalStatusTuple: [
    string,
    boolean?
] = ["Active"];

console.log(optionalStatusTuple);

// 5. Optional value supplied
let optionalStatusTuple2: [
    string,
    boolean?
] = ["Inactive", false];

console.log(optionalStatusTuple2);

// 6. Three-element tuple with optional value
let optionalProductTuple: [
    string,
    number,
    boolean?
] = [
    "Laptop",
    75000
];

console.log(optionalProductTuple);