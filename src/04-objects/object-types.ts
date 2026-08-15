// TypeScript Object Types

// 1. Basic object type

let objectUser: {
    name: string;
    age: number;
    active: boolean;
} = {
    name: "Aman",
    age: 25,
    active: true
};

console.log(objectUser);

// 2. Access object properties

console.log(objectUser.name);
console.log(objectUser.age);
console.log(objectUser.active);

// 3. Modify properties

objectUser.name = "Rahul";
objectUser.age = 30;

console.log(objectUser);

// 4. Another object

let objectProduct: {
    name: string;
    price: number;
} = {
    name: "Laptop",
    price: 75000
};

console.log(objectProduct);

// 5. Object with multiple types

let objectEmployee: {
    id: number;
    name: string;
    salary: number;
    active: boolean;
} = {
    id: 101,
    name: "Aman",
    salary: 50000,
    active: true
};

console.log(objectEmployee);