// TypeScript Arrays

// 1. Number array
let arrayNumbers: number[] = [10, 20, 30, 40];
console.log(arrayNumbers);

// 2. String array
let arrayNames: string[] = ["Aman", "Rahul", "Mohit"];
console.log(arrayNames);

// 3. Boolean array
let arrayStatuses: boolean[] = [true, false, true];
console.log(arrayStatuses);

// 4. Array using generic syntax
let arrayCities: Array<string> = [
    "Delhi",
    "Mumbai",
    "Kolkata"
];

console.log(arrayCities);

// 5. Access array elements

console.log(arrayNames[0]);
console.log(arrayNames[1]);

// 6. Change array element
arrayNumbers[0] = 100;
console.log(arrayNumbers);

// 7. Add element
arrayNumbers.push(50);
console.log(arrayNumbers);

// 8. Remove last element
arrayNumbers.pop();
console.log(arrayNumbers);

// 9. Array length
console.log(arrayNames.length);

// 10. Loop through array

for (const arrayName of arrayNames) {
    console.log(arrayName);
}

// 11. Map

let arrayDoubled = arrayNumbers.map(
    (arrayNumber) => arrayNumber * 2
);

console.log(arrayDoubled);

// 12. Filter

let arrayLargeNumbers = arrayNumbers.filter(
    (arrayNumber) => arrayNumber > 20
);

console.log(arrayLargeNumbers);