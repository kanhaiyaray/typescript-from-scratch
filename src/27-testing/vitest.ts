function multiply(a: number, b: number): number {
  return a * b;
}

const expected = 50;
const actual = multiply(10, 5);

console.log("Vitest-style test example");
console.log("Expected:", expected);
console.log("Actual:", actual);
console.log("Passed:", actual === expected);
