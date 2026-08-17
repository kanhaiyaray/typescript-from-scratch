// TypeScript let, const and var

// 1. let
let userName: string = "Aman";
console.log(userName);

userName = "Rahul";
console.log(userName);

// 2. const
const countryName: string = "India";
console.log(countryName);

// const cannot be reassigned
// countryName = "USA"; // Error

// 3. var
var userAge: number = 25;
console.log(userAge);

userAge = 30;
console.log(userAge);


// 4. let is block scoped
if (true) {
    let blockLet: string = "Inside block";

    console.log(blockLet);
}

// blockLet cannot be accessed here
// console.log(blockLet); // Error

// 5. var is function scoped

if (true) {
    var blockVar: string = "Var value";
}

console.log(blockVar);

// 6. const with object
const user = {
    name: "Aman",
    age: 25
};

user.name = "Rahul";
console.log(user);

// 7. const with array
const fruits: string[] = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);

export {};