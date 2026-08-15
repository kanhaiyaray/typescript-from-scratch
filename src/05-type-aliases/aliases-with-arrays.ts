// Type Aliases with Arrays

// 1. String array

type NamesList = string[];

const studentsList: NamesList = [
    "Aman",
    "Rahul",
    "Priya"
];

console.log(studentsList);

// 2. Number array

type ScoresList = number[];

const examScores: ScoresList = [
    80,
    90,
    75,
    88
];

console.log(examScores);

// 3. Boolean array

type StatusList = boolean[];

const userStatuses: StatusList = [
    true,
    false,
    true
];

console.log(userStatuses);

// 4. Object array

type ProductItem = {
    name: string;
    price: number;
};

type ProductList = ProductItem[];

const productsData: ProductList = [
    {
        name: "Laptop",
        price: 75000
    },
    {
        name: "Mouse",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 2500
    }
];

console.log(productsData);

// 5. Access array objects

console.log(productsData[0].name);
console.log(productsData[0].price);