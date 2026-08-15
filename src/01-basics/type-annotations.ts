// TypeScript Type Annotations

// 1. String annotation
let annotationName: string = "Aman";
console.log(annotationName);

// 2. Number annotation
let annotationAge: number = 25;
console.log(annotationAge);

// 3. Boolean annotation
let annotationStudent: boolean = true;
console.log(annotationStudent);

// 4. Array annotation
let annotationFruits: string[] = [
    "Apple",
    "Banana",
    "Mango"
];

console.log(annotationFruits);


// 5. Number array
let annotationNumbers: number[] = [
    10,
    20,
    30
];

console.log(annotationNumbers);

// 6. Object annotation
let annotationUser: {
    name: string;
    age: number;
    active: boolean;
} = {
    name: "Aman",
    age: 25,
    active: true
};

console.log(annotationUser);

// 7. Function parameter annotation
function annotationAdd(
    firstNumber: number,
    secondNumber: number
): number {
    return firstNumber + secondNumber;
}

console.log(annotationAdd(10, 20));

// 8. Function string annotation
function annotationGreeting(
    personName: string
): string {
    return `Hello ${personName}`;
}

console.log(annotationGreeting("Aman"));