// Function Overloads

// Function overloads allow a function
// to have multiple function signatures.

// 1. Number overload
function overloadCombine(a: number, b: number): number;

// 2. String overload
function overloadCombine(a: string, b: string): string;


// Implementation
function overloadCombine(
    a: number | string,
    b: number | string
): number | string {
    if (
        typeof a === "number" &&
        typeof b === "number"
    ) {
        return a + b;
    }

    if (
        typeof a === "string" &&
        typeof b === "string"
    ) {
        return a + b;
    }

    throw new Error("Both values must have the same type");
}

// Number
console.log(overloadCombine(10, 20));

// String
console.log(overloadCombine("Hello ", "TypeScript"));

// 2. Another overload example
function overloadDisplay(value: number): string;
function overloadDisplay(value: string): string;

function overloadDisplay(
    value: number | string
): string {
    return `Value: ${value}`;
}

console.log(overloadDisplay(100));
console.log(overloadDisplay("Aman"));