// TypeScript Booleans

// 1. true
let booleanIsLoggedIn: boolean = true;
console.log(booleanIsLoggedIn);

// 2. false
let booleanIsAdmin: boolean = false;
console.log(booleanIsAdmin);

// 3. Comparison
let booleanUserAge: number = 20;
console.log(booleanUserAge >= 18);

// 4. Equal
console.log(10 === 10);
console.log(20 === 20);

// 5. Not Equal
let booleanNumberA: number = 10;
let booleanNumberB: number = 20;

console.log(booleanNumberA !== booleanNumberB);

// 6. Greater Than
console.log(20 > 10);

// 7. Less Than
console.log(10 < 20);

// 8. AND
let booleanUsername: string = "Aman";
let booleanPasswordCorrect: boolean = true;

console.log(
    booleanUsername === "Aman" && booleanPasswordCorrect
);

// 9. OR
let booleanIsAdminUser: boolean = false;
let booleanIsManager: boolean = true;

console.log(
    booleanIsAdminUser || booleanIsManager
);

// 10. NOT
let booleanActive: boolean = true;
console.log(!booleanActive);

// 11. Boolean with if
let booleanLoggedIn: boolean = true;

if (booleanLoggedIn) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in");
}

export {};