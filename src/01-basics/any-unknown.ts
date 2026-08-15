// Any vs Unknown
// ANY

// 1. any can contain anything
let anyData: any = "Hello";
console.log(anyData);

anyData = 123;
console.log(anyData);

anyData = true;
console.log(anyData);

// 2. any allows any operation
let anyStringValue: any = "typescript";
console.log(anyStringValue.toUpperCase());

// 3. any can cause runtime errors
let anyNumberValue: any = 123;

// This compiles but causes a runtime error
// console.log(anyNumberValue.toUpperCase());

// UNKNOWN
// 4. unknown can contain anything
let unknownData: unknown = "TypeScript";
unknownData = 123;
unknownData = true;
console.log(unknownData);

// 5. unknown cannot be used directly
let unknownStringValue: unknown = "typescript";

// This gives a TypeScript error:
// console.log(unknownStringValue.toUpperCase());

// 6. Type Narrowing
let unknownTextValue: unknown = "TypeScript";

if (typeof unknownTextValue === "string") {
    console.log(unknownTextValue.toUpperCase());
}

// 7. Unknown number
let unknownNumberValue: unknown = 123;

if (typeof unknownNumberValue === "number") {
    console.log(unknownNumberValue.toFixed(2));
}

// 8. Unknown boolean
let unknownBooleanValue: unknown = true;

if (typeof unknownBooleanValue === "boolean") {
    console.log(unknownBooleanValue);
}

// 9. Any vs Unknown
let comparisonAnyValue: any = "Hello";
console.log(comparisonAnyValue.toUpperCase());

let comparisonUnknownValue: unknown = "Hello";

if (typeof comparisonUnknownValue === "string") {
    console.log(comparisonUnknownValue.toUpperCase());
}

export {};