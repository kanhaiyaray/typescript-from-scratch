// TypeScript BigInt

// 1. BigInt
let bigNumber: bigint = 12345678901234567890n;
console.log(bigNumber);

// 2. Another BigInt
const firstBigNumber: bigint = 100n;
const secondBigNumber: bigint = 200n;

console.log(firstBigNumber + secondBigNumber);

// 3. Subtraction
console.log(secondBigNumber - firstBigNumber);

// 4. Multiplication
console.log(firstBigNumber * secondBigNumber);

// 5. Division
console.log(secondBigNumber / firstBigNumber);

// 6. BigInt comparison
console.log(100n > 50n);
console.log(100n === 100n);

// 7. BigInt type
console.log(typeof bigNumber);