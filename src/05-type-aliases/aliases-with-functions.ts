// Type Aliases with Functions

// 1. Function type alias

type AddFunction = (a: number, b: number) => number;

const addNumbersAlias: AddFunction = (a, b) => {
    return a + b;
};

console.log(addNumbersAlias(10, 20));

// 2. Subtraction

type SubtractFunction = (a: number, b: number) => number;

const subtractNumbersAlias: SubtractFunction = (a, b) => {
    return a - b;
};

console.log(subtractNumbersAlias(30, 10));

// 3. Greeting function

type GreetingFunction = (name: string) => string;

const createGreeting: GreetingFunction = (name) => {
    return `Hello ${name}`;
};

console.log(createGreeting("Aman"));

// 4. Boolean function

type CheckAgeFunction = (age: number) => boolean;

const isAdultUser: CheckAgeFunction = (age) => {
    return age >= 18;
};

console.log(isAdultUser(25));
console.log(isAdultUser(15));