// Excess Property Checks

// 1. Basic object type

type ExcessUser = {
    name: string;
    age: number;
};

// Correct object

let excessUserOne: ExcessUser = {
    name: "Aman",
    age: 25
};

console.log(excessUserOne);

// 2. Extra property directly

// This produces an error:
//
// let excessUserTwo: ExcessUser = {
//     name: "Rahul",
//     age: 30,
//     city: "Delhi"
// };


// 3. Correct way

let excessUserThree: ExcessUser = {
    name: "Rahul",
    age: 30
};

console.log(excessUserThree);

// 4. Extra property through another variable

let excessUserData = {
    name: "Mohit",
    age: 28,
    city: "Mumbai"
};

let excessUserFour: ExcessUser = excessUserData;

console.log(excessUserFour);


// Notice:
// excessUserData has "city", but assignment is allowed here because
// excessUserData is first stored in a variable.