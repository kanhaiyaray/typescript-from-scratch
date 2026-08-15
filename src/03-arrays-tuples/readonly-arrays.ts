// Readonly Arrays
// A readonly array cannot be changed & after it is created.

// 1. Readonly number array

const readonlyNumbers: readonly number[] = [
    10,
    20,
    30
];

console.log(readonlyNumbers);

// 2. Access elements

console.log(readonlyNumbers[0]);
console.log(readonlyNumbers[1]);

// 3. Length
console.log(readonlyNumbers.length);

// 4. Loop

for (const readonlyNumber of readonlyNumbers) {
    console.log(readonlyNumber);
}

// These operations are NOT allowed:

// readonlyNumbers.push(40);
// readonlyNumbers.pop();
// readonlyNumbers[0] = 100;


// 5. Readonly string array

const readonlyNames: readonly string[] = [
    "Aman",
    "Rahul",
    "Mohit"
];

console.log(readonlyNames);