// Optional Parameters

// 1. Optional parameter
function optionalGreet(name?: string): void {
    if (name) {
        console.log(`Hello ${name}`);
    } else {
        console.log("Hello Guest");
    }
}

optionalGreet("Aman");
optionalGreet();

// 2. Optional age
function optionalUser(name: string, age?: number): void {
    console.log(`Name: ${name}`);

    if (age !== undefined) {
        console.log(`Age: ${age}`);
    } else {
        console.log("Age not provided");
    }
}

optionalUser("Aman", 25);
optionalUser("Rahul");

// 3. Optional string
function optionalCity(city?: string): string {
    return city ?? "Delhi";
}

console.log(optionalCity("Mumbai"));
console.log(optionalCity());