// TypeScript Function Types

// 1. Function with no parameters
function functionTypeGreet(): void {
    console.log("Hello TypeScript");
}

functionTypeGreet();

// 2. Function with parameters
function functionTypeWelcome(name: string): void {
    console.log(`Welcome ${name}`);
}

functionTypeWelcome("Aman");

// 3. Function with return type
function functionTypeAdd(a: number, b: number): number {
    return a + b;
}

console.log(functionTypeAdd(10, 20));

// 4. Function type variable
let functionTypeMultiply: (a: number, b: number) => number;

functionTypeMultiply = (a, b) => {
    return a * b;
};

console.log(functionTypeMultiply(5, 4));

// 5. Function type returning string
let functionTypeMessage: (name: string) => string;

functionTypeMessage = (name) => {
    return `Hello ${name}`;
};

console.log(functionTypeMessage("Aman"));