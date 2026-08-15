// Readonly Properties 

// 1. Readonly property

let readonlyObjectUser: {
    readonly id: number;
    name: string;
} = {
    id: 101,
    name: "Aman"
};

console.log(readonlyObjectUser);

// 2. Normal property can change

readonlyObjectUser.name = "Rahul";
console.log(readonlyObjectUser);

// 3. Readonly property cannot change

// readonlyObjectUser.id = 102;
// Error

// 4. Multiple readonly properties

let readonlyProduct: {
    readonly productId: number;
    readonly productCode: string;
    name: string;
} = {
    productId: 1001,
    productCode: "LAP-001",
    name: "Laptop"
};

console.log(readonlyProduct);

// Only name can change

readonlyProduct.name = "Gaming Laptop";
console.log(readonlyProduct);