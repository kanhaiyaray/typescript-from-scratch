// TypeScript Strings
// 1. Basic String

let stringFirstName: string = "Aman";
console.log(stringFirstName);

// 2. Double Quotes
let stringCity: string = "Delhi";
console.log(stringCity);

// 3. Single Quotes
let stringCountry: string = "India";
console.log(stringCountry);

// 4. Template Literals
let stringFullName: string = "Aman";
let stringAge: number = 25;
let stringMessage: string =
    `My name is ${stringFullName} and I am ${stringAge} years old.`;

console.log(stringMessage);

// 5. String Concatenation
let stringFirstWord: string = "Hello";
let stringSecondWord: string = "TypeScript";
let stringConcatenatedResult: string =
    stringFirstWord + " " + stringSecondWord;

console.log(stringConcatenatedResult);

// 6. String Length
let stringLanguage: string = "TypeScript";
console.log(stringLanguage.length);

// 7. toUpperCase()
let stringLowerText: string = "typescript";
console.log(stringLowerText.toUpperCase());

// 8. toLowerCase()

let stringUpperText: string = "TYPESCRIPT";
console.log(stringUpperText.toLowerCase());

// 9. includes()

let stringSentence: string = "I am learning TypeScript";
console.log(stringSentence.includes("TypeScript"));
console.log(stringSentence.includes("Java"));

// 10. startsWith()
console.log(stringSentence.startsWith("I"));

// 11. endsWith()
console.log(stringSentence.endsWith("TypeScript"));

// 12. trim()
let stringUsername: string = "   Aman   ";
console.log(stringUsername);
console.log(stringUsername.trim());

// 13. String Index
let stringWord: string = "Hello";
console.log(stringWord[0]);
console.log(stringWord[1]);
console.log(stringWord[4]);

// 14. String Slice
let stringTechnology: string = "TypeScript";
console.log(stringTechnology.slice(0, 4));
console.log(stringTechnology.slice(4));

// 15. Replace
let stringOldText: string = "I like JavaScript";
let stringNewText: string = stringOldText.replace(
    "JavaScript",
    "TypeScript"
);

console.log(stringNewText);

export {};