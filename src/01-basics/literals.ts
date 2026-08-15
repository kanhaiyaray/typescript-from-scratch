// TypeScript Literal Types

// 1. String literal
let direction: "left" | "right" = "left";
console.log(direction);

direction = "right";
console.log(direction);

// 2. Number literal
let diceNumber: 1 | 2 | 3 | 4 | 5 | 6 = 6;
console.log(diceNumber);

// 3. Boolean literal
let isActive: true = true;
console.log(isActive);

// 4. Status literal
let statusValue: "success" | "error" | "loading" = "success";
console.log(statusValue);

statusValue = "loading";
console.log(statusValue);

// 5. User role literal
let userRole: "admin" | "user" | "guest" = "admin";
console.log(userRole);

userRole = "user";
console.log(userRole);


// 6. Literal function parameter
function move(direction: "left" | "right"): string {
    return `Moving ${direction}`;
}

console.log(move("left"));
console.log(move("right"));