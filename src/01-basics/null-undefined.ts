// TypeScript null and undefined
// 1. undefined

let nullUndefinedUsername: string | undefined;
console.log(nullUndefinedUsername);

// 2. Assigning a value

let nullUndefinedUsernameValue: string | undefined;
nullUndefinedUsernameValue = "Aman";
console.log(nullUndefinedUsernameValue);

// 3. null
let nullUndefinedUser: string | null = null;
console.log(nullUndefinedUser);

// 4. Assigning a value
nullUndefinedUser = "Rahul";
console.log(nullUndefinedUser);

// 5. typeof undefined
let nullUndefinedValue: undefined = undefined;
console.log(typeof nullUndefinedValue);

// 6. typeof null
let nullValueExample: null = null;
console.log(typeof nullValueExample);

// 7. Union with null
let nullSelectedUser: string | null = null;
console.log(nullSelectedUser);

nullSelectedUser = "Aman";
console.log(nullSelectedUser);

// 8. Union with undefined
let nullUndefinedEmail: string | undefined = undefined;
console.log(nullUndefinedEmail);

nullUndefinedEmail = "aman@example.com";
console.log(nullUndefinedEmail);

// 9. Checking null
let nullName: string | null = null;

if (nullName === null) {
    console.log("Name is null");
} else {
    console.log(nullName);
}

// 10. Checking undefined
let undefinedPhone: string | undefined;

if (undefinedPhone === undefined) {
    console.log("Phone is undefined");
} else {
    console.log(undefinedPhone);
}

export {};