// Tuple Rest Elements

// Rest elements allow a tuple to contain
// a fixed beginning followed by multiple values.

// 1. String followed by numbers
let restNumbersTuple: [
    string,
    ...number[]
] = [
    "Numbers",
    10,
    20,
    30,
    40
];

console.log(restNumbersTuple);

// 2. Name followed by scores
let restScoresTuple: [
    string,
    ...number[]
] = [
    "Aman",
    80,
    90,
    95
];

console.log(restScoresTuple);

// 3. Boolean followed by strings

let restNamesTuple: [
    boolean,
    ...string[]
] = [
    true,
    "Aman",
    "Rahul",
    "Mohit"
];

console.log(restNamesTuple);

// 4. Fixed values followed by rest

let restUserTuple: [
    string,
    number,
    ...string[]
] = [
    "Aman",
    25,
    "Developer",
    "TypeScript",
    "JavaScript"
];

console.log(restUserTuple);

// 5. Access values

console.log(restUserTuple[0]);
console.log(restUserTuple[1]);
console.log(restUserTuple[2]);