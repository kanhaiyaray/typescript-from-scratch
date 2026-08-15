// Higher-Order Functions

// A higher-order function:
// 1. Accepts a function as an argument Aur Returns a function

// 1. Function accepting another function
function higherOrderCalculate(
    value: number,
    operation: (number: number) => number
): number {
    return operation(value);
}

console.log(
    higherOrderCalculate(10, (number) => number * 2)
);

// 2. Another operation
console.log(
    higherOrderCalculate(10, (number) => number + 5)
);

// 3. Function returning another function
function higherOrderMultiplier(
    multiplier: number
): (value: number) => number {
    return (value: number): number => {
        return value * multiplier;
    };
}

const doubleNumber = higherOrderMultiplier(2);
console.log(doubleNumber(10));

// 4. Triple
const tripleNumber = higherOrderMultiplier(3);
console.log(tripleNumber(10));