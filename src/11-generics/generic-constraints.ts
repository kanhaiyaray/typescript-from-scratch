function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

const wordLength = getLength("TypeScript");
const arrayLength = getLength([7, 14, 21, 28]);

console.log("Word length:", wordLength);
console.log("Array length:", arrayLength);

function printIdentifier<T extends string | number>(id: T): void {
  console.log("Identifier:", id);
}

printIdentifier("DEVICE-204");
printIdentifier(7821);
