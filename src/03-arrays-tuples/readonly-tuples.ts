// Readonly Tuples

// A readonly tuple cannot have its elements
// changed after creation.


// 1. Readonly tuple
const readonlyUserTuple: readonly [
    string,
    number
] = [
    "Aman",
    25
];

console.log(readonlyUserTuple);

// 2. Access elements
console.log(readonlyUserTuple[0]);
console.log(readonlyUserTuple[1]);

// These are NOT allowed:
// readonlyUserTuple[0] = "Rahul";
// readonlyUserTuple[1] = 30;

// 3. Readonly tuple with three values

const readonlyProductTuple: readonly [
    string,
    number,
    boolean
] = [
    "Laptop",
    75000,
    true
];

console.log(readonlyProductTuple);

// 4. Readonly tuple array

const readonlyUsersTuple: readonly [
    string,
    number
][] = [
    ["Aman", 25],
    ["Rahul", 30]
];

console.log(readonlyUsersTuple);