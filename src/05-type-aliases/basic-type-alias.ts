// TypeScript Type Aliases
// Basic Type Alias

// 1. String type alias
type UserName = string;

let userNameAlias: UserName = "Aman";
console.log(userNameAlias);

// 2. Number type alias
type UserAge = number;
let userAgeAlias: UserAge = 25;
console.log(userAgeAlias);

// 3. Boolean type alias
type IsActive = boolean;

let activeStatusAlias: IsActive = true;
console.log(activeStatusAlias);

// 4. Multiple variables using the same alias
let firstNameAlias: UserName = "Rahul";
let secondNameAlias: UserName = "Priya";

console.log(firstNameAlias);
console.log(secondNameAlias);

// 5. Type alias with primitive value
type ProductPrice = number;

let laptopPriceAlias: ProductPrice = 75000;
console.log(laptopPriceAlias);