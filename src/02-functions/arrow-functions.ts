// Arrow Functions

// 1. Basic arrow function
const arrowGreet = (): void => {
    console.log("Hello TypeScript");
};

arrowGreet();

// 2. Arrow function with parameter
const arrowWelcome = (name: string): void => {
    console.log(`Welcome ${name}`);
};

arrowWelcome("Aman");

// 3. Arrow function with return
const arrowAdd = (a: number, b: number): number => {
    return a + b;
};

console.log(arrowAdd(10, 20));

// 4. Short arrow function
const arrowMultiply = (a: number, b: number): number => a * b;
console.log(arrowMultiply(5, 4));

// 5. Boolean
const arrowIsAdult = (age: number): boolean => age >= 18;
console.log(arrowIsAdult(25));