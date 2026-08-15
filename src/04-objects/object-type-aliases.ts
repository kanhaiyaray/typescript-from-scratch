// Object Type Aliases

// 1. Basic type alias

type ObjectAliasUser = {
    name: string;
    age: number;
};

let objectAliasUserOne: ObjectAliasUser = {
    name: "Aman",
    age: 25
};

console.log(objectAliasUserOne);

// 2. Reuse the type

let objectAliasUserTwo: ObjectAliasUser = {
    name: "Rahul",
    age: 30
};

console.log(objectAliasUserTwo);

// 3. Type alias with boolean

type ObjectAliasProduct = {
    name: string;
    price: number;
    available: boolean;
};

let objectAliasProductOne: ObjectAliasProduct = {
    name: "Laptop",
    price: 75000,
    available: true
};

console.log(objectAliasProductOne);

// 4. Type alias with nested object

type ObjectAliasEmployee = {
    id: number;
    name: string;
    address: {
        city: string;
        country: string;
    };
};

let objectAliasEmployeeOne: ObjectAliasEmployee = {
    id: 101,
    name: "Aman",
    address: {
        city: "Delhi",
        country: "India"
    }
};

console.log(objectAliasEmployeeOne);

// 5. Type alias with optional property

type ObjectAliasStudent = {
    name: string;
    age: number;
    course?: string;
};

let objectAliasStudentOne: ObjectAliasStudent = {
    name: "Aman",
    age: 25
};

console.log(objectAliasStudentOne);

// 6. Function using object type alias

function objectAliasPrintUser(
    user: ObjectAliasUser
): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
}

objectAliasPrintUser(objectAliasUserOne);