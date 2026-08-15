// void
// void means the function does not return a value.

// 1. Basic void function
function voidGreet(): void {
    console.log("Hello TypeScript");
}

voidGreet();

// 2. Void with parameter
function voidWelcome(name: string): void {
    console.log(`Welcome ${name}`);
}

voidWelcome("Aman");

// 3. Void with multiple parameters
function voidPrintUser(
    name: string,
    age: number
): void {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}

voidPrintUser("Aman", 25);

// 4. Void function with condition
function voidCheckAge(age: number): void {
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    }
}

voidCheckAge(25);