// Union Types with Type Aliases

// 1. String or number
type UserId = string | number;

let userIdValue: UserId = "USER101";
console.log(userIdValue);

userIdValue = 101;
console.log(userIdValue);

// 2. String or null
type UserNameOrNull = string | null;

let nullableUserName: UserNameOrNull = null;
console.log(nullableUserName);

nullableUserName = "Aman";
console.log(nullableUserName);

// 3. String or number or boolean
type MixedValue = string | number | boolean;

let mixedTypeValue: MixedValue = "TypeScript";
console.log(mixedTypeValue);

mixedTypeValue = 100;
console.log(mixedTypeValue);

mixedTypeValue = true;
console.log(mixedTypeValue);

// 4. Union with function

function printUserId(id: UserId): void {
    console.log(id);
}

printUserId("ABC123");
printUserId(500);