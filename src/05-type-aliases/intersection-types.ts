// Intersection Types

// First type
type PersonInfo = {
    name: string;
    age: number;
};

// Second type
type EmployeeInfo = {
    employeeId: number;
    department: string;
};

// Intersection
type EmployeePerson = PersonInfo & EmployeeInfo;

const employeePersonData: EmployeePerson = {
    name: "Aman",
    age: 25,
    employeeId: 1001,
    department: "IT"
};

console.log(employeePersonData);

// Access individual properties

console.log(employeePersonData.name);
console.log(employeePersonData.age);
console.log(employeePersonData.employeeId);
console.log(employeePersonData.department);

// Another intersection example

type AddressInfo = {
    city: string;
    country: string;
};

type ContactInfo = {
    email: string;
    phone: string;
};

type CompleteContact = AddressInfo & ContactInfo;

const contactData: CompleteContact = {
    city: "Delhi",
    country: "India",
    email: "aman@example.com",
    phone: "9876543210"
};

console.log(contactData);