// Optional Properties

// 1. Optional property
let optionalObjectUser: {
    name: string;
    age?: number;
} = {
    name: "Aman"
};

console.log(optionalObjectUser);

// 2. Optional property with value

let optionalObjectUser2: {
    name: string;
    age?: number;
} = {
    name: "Rahul",
    age: 30
};

console.log(optionalObjectUser2);

// 3. Checking optional property

if (optionalObjectUser.age !== undefined) {
    console.log(optionalObjectUser.age);
} else {
    console.log("Age not provided");
}

// 4. Multiple optional properties
let optionalEmployee: {
    name: string;
    age?: number;
    salary?: number;
    department?: string;
} = {
    name: "Aman"
};

console.log(optionalEmployee);

// 5. Optional property later

optionalEmployee.department = "IT";
console.log(optionalEmployee);