// TypeScript Numbers
// 1. Integer

const numberAge: number = 25;
console.log(numberAge);

// 2. Decimal
const numberPrice: number = 99.99;
console.log(numberPrice);

// 3. Negative Number
const numberTemperature: number = -10;
console.log(numberTemperature);

// 4. Addition

const numberA: number = 10;
const numberB: number = 20;

console.log(numberA + numberB);

// 5. Subtraction
console.log(numberB - numberA);

// 6. Multiplication
console.log(numberA * numberB);

// 7. Division
console.log(numberB / numberA);

// 8. Modulus
console.log(10 % 3);

// 9. Increment
let numberCount: number = 10;
numberCount++;

console.log(numberCount);

// 10. Decrement

numberCount--;
console.log(numberCount);

// 11. Math Methods

console.log(Math.round(10.6));
console.log(Math.floor(10.9));
console.log(Math.ceil(10.1));

// 12. Maximum
console.log(Math.max(10, 20, 30));

// 13. Minimum
console.log(Math.min(10, 20, 30));

// 14. NaN
let numberInvalidValue: number = Number("Hello");

console.log(numberInvalidValue);
console.log(Number.isNaN(numberInvalidValue));

// 15. Infinity

let numberInfinityResult: number = 10 / 0;
console.log(numberInfinityResult);


export {};