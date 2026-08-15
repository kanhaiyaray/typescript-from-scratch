// Object Type Alias

type Student = {
    name: string;
    age: number;
    isStudent: boolean;
};

const studentOne: Student = {
    name: "Aman",
    age: 25,
    isStudent: true
};

console.log(studentOne);

// 2. Another object using the same alias

const studentTwo: Student = {
    name: "Rahul",
    age: 22,
    isStudent: true
};

console.log(studentTwo);

// 3. Access object properties

console.log(studentOne.name);
console.log(studentOne.age);
console.log(studentOne.isStudent);