// Callback Functions
// A callback is a function passed to another function.

// 1. Basic callback
function callbackProcess(
    name: string,
    callback: (value: string) => void
): void {
    callback(name);
}

callbackProcess("Aman", (value) => {
    console.log(`Hello ${value}`);
});

// 2. Number callback
function callbackCalculate(
    a: number,
    b: number,
    operation: (x: number, y: number) => number
): number {
    return operation(a, b);
}

const callbackResult = callbackCalculate(
    10,
    20,
    (x, y) => x + y
);

console.log(callbackResult);

// 3. Another callback
const callbackMultiplyResult = callbackCalculate(
    5,
    4,
    (x, y) => x * y
);

console.log(callbackMultiplyResult);