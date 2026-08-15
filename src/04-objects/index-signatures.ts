// Index Signatures

// 1. String index signature

let indexScores: {
    [studentName: string]: number;
} = {
    Aman: 90,
    Rahul: 85,
    Mohit: 95
};

console.log(indexScores);

// 2. Access using key

console.log(indexScores["Aman"]);
console.log(indexScores["Rahul"]);

// 3. Add new property

indexScores["Karan"] = 88;
console.log(indexScores);

// 4. Number index signature

let indexNumbers: {
    [index: number]: string;
} = {
    0: "Aman",
    1: "Rahul",
    2: "Mohit"
};

console.log(indexNumbers);

// 5. Access number index

console.log(indexNumbers[0]);
console.log(indexNumbers[1]);

// 6. Dynamic properties

let indexEmployeeSalaries: {
    [employeeName: string]: number;
} = {};

indexEmployeeSalaries["Aman"] = 50000;
indexEmployeeSalaries["Rahul"] = 60000;

console.log(indexEmployeeSalaries);