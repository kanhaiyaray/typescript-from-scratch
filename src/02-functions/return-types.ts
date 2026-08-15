// Function Return Types

// 1. Return number
function returnAdd(a: number, b: number): number {
    return a + b;
}

console.log(returnAdd(10, 20));

// 2. Return string
function returnGreeting(name: string): string {
    return `Hello ${name}`;
}

console.log(returnGreeting("Aman"));

// 3. Return boolean
function returnAdult(age: number): boolean {
    return age >= 18;
}

console.log(returnAdult(25));
console.log(returnAdult(15));

// 4. Return array
function returnNumbers(): number[] {
    return [10, 20, 30, 40];
}

console.log(returnNumbers());

// 5. Return object
function returnUser(): { name: string; age: number } {
    return {
        name: "Aman",
        age: 25
    };
}

console.log(returnUser());