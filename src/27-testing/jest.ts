function isEven(value: number): boolean {
  return value % 2 === 0;
}

const value = 8;

console.log("Jest-style assertion example");
console.log("Value:", value);
console.log("Expected even:", true);
console.log("Actual:", isEven(value));
console.log("Passed:", isEven(value) === true);
