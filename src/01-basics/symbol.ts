// TypeScript Symbol

// 1. Create a Symbol
const symbolId: symbol = Symbol("id");
console.log(symbolId);

// 2. Two Symbols are unique
const firstSymbol: symbol = Symbol("user");
const secondSymbol: symbol = Symbol("user");

console.log(firstSymbol === secondSymbol);

// 3. Symbol as object key
const uniqueId: symbol = Symbol("id");

const symbolUser = {
    name: "Aman",
    [uniqueId]: 123
};

console.log(symbolUser.name);
console.log(symbolUser[uniqueId]);

// 4. typeof Symbol
console.log(typeof symbolId);