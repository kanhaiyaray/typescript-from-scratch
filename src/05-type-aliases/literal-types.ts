// Literal Types

// 1. String literal
type Direction = "left" | "right" | "up" | "down";

let moveDirection: Direction = "left";
console.log(moveDirection);

moveDirection = "right";
console.log(moveDirection);

// 2. Number literal
type StatusCode = 200 | 404 | 500;

let responseCode: StatusCode = 200;
console.log(responseCode);

responseCode = 404;
console.log(responseCode);

// 3. Boolean literal

type IsOnline = true | false;

let onlineStatus: IsOnline = true;
console.log(onlineStatus);

// 4. Function using literal type

function movePlayer(direction: Direction): void {
    console.log("Player moved:", direction);
}

movePlayer("up");
movePlayer("down");

// 5. User role

type UserRole = "admin" | "user" | "manager";

let currentUserRole: UserRole = "admin";
console.log(currentUserRole);