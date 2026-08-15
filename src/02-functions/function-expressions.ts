// Function Expressions
// A function can be stored inside a variable.

// 1. Basic function expression
const expressionGreet = function (): void {
    console.log("Hello TypeScript");
};

expressionGreet();

// 2. Parameters
const expressionAdd = function (
    a: number,
    b: number
): number {
    return a + b;
};

console.log(expressionAdd(10, 20));

// 3. String return
const expressionWelcome = function (
    name: string
): string {
    return `Welcome ${name}`;
};

console.log(expressionWelcome("Aman"));

// 4. Boolean return
const expressionIsAdult = function (
    age: number
): boolean {
    return age >= 18;
};

console.log(expressionIsAdult(25));