// Function Parameters

// 1. One parameter
function parameterGreet(name: string): void {
    console.log(`Hello ${name}`);
}

parameterGreet("Aman");

// 2. Multiple parameters
function parameterAdd(a: number, b: number): number {
    return a + b;
}

console.log(parameterAdd(10, 20));

// 3. String parameters
function parameterFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

console.log(parameterFullName("Aman", "Kumar"));

// 4. Number parameters
function parameterMultiply(x: number, y: number): number {
    return x * y;
}

console.log(parameterMultiply(5, 6));

// 5. Boolean parameter
function parameterStatus(isActive: boolean): string {
    if (isActive) {
        return "User is active";
    }

    return "User is inactive";
}

console.log(parameterStatus(true));