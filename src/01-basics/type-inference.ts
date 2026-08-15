// TypeScript Type Inference

// TypeScript can automatically understand
// the type from the value.

// 1. String inference
let inferenceName: string = "Aman";
console.log(inferenceName);

// 2. Number inference
let inferenceAge: number = 25;
console.log(inferenceAge);

// 3. Boolean inference
let inferenceIsStudent: boolean = true;
console.log(inferenceIsStudent);

// 4. Array inference

let inferenceFruits: string[] = [
    "Apple",
    "Banana",
    "Mango"
];

console.log(inferenceFruits);

// 5. Object inference

let inferenceUser = {
    name: "Aman",
    age: 25,
    active: true
};

console.log(inferenceUser.name);
console.log(inferenceUser.age);
console.log(inferenceUser.active);

// 6. Inferred variable cannot change type
let inferenceCity = "Delhi";
inferenceCity = "Mumbai";
console.log(inferenceCity);

// This gives an error:
// inferenceCity = 123;

// 7. Inferred number
let inferenceScore = 100;
inferenceScore = 200;
console.log(inferenceScore);

// This gives an error:
// inferenceScore = "200";

// 8. Explicit type vs inference

// Explicit

let inferenceExplicitUsername: string = "Aman";

// Inferred

let inferenceUsername = "Aman";

console.log(inferenceExplicitUsername);
console.log(inferenceUsername);

// 9. Function inference

function inferenceAdd(
    a: number,
    b: number
) {
    return a + b;
}

let inferenceResult = inferenceAdd(10, 20);
console.log(inferenceResult);

// 10. const inference

const inferenceCountry = "India";
console.log(inferenceCountry);

export {};