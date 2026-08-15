// Labeled Tuples

// Labels make tuple elements easier to understand.
// The labels do not change the actual types.

// 1. Basic labeled tuple

let labeledUser: [
    name: string,
    age: number
] = [
    "Aman",
    25
];

console.log(labeledUser);

// 2. Three labels

let labeledProduct: [
    name: string,
    price: number,
    available: boolean
] = [
    "Laptop",
    75000,
    true
];

console.log(labeledProduct);

// 3. Labeled tuple function

function labeledUserInfo(
    user: [name: string, age: number]
): void {
    console.log(`Name: ${user[0]}`);
    console.log(`Age: ${user[1]}`);
}

labeledUserInfo(["Aman", 25]);

// 4. Labeled tuple with optional element

let labeledAccount: [
    username: string,
    age: number,
    active?: boolean
] = [
    "aman123",
    25
];

console.log(labeledAccount);

// 5. Labeled tuple with rest

let labeledScores: [
    student: string,
    ...scores: number[]
] = [
    "Aman",
    80,
    90,
    95
];

console.log(labeledScores);