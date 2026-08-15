// Default Parameters

// 1. Default parameter
function defaultGreet(name: string = "Guest"): void {
    console.log(`Hello ${name}`);
}

defaultGreet("Aman");
defaultGreet();

// 2. Default number
function defaultMultiply(
    number: number,
    multiplier: number = 2
): number {
    return number * multiplier;
}

console.log(defaultMultiply(10));
console.log(defaultMultiply(10, 5));

// 3. Default city
function defaultCity(city: string = "Delhi"): void {
    console.log(`City: ${city}`);
}

defaultCity();
defaultCity("Mumbai");

// 4. Default boolean
function defaultStatus(isActive: boolean = true): string {
    return isActive ? "Active" : "Inactive";
}

console.log(defaultStatus());
console.log(defaultStatus(false));