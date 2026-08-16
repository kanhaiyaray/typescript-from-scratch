// TypeScript: Equality Narrowing

// 1. Equality narrowing with different value types

function matchCode(
    firstCode: string | number,
    secondCode: string | number
): void {
    if (firstCode === secondCode) {
        console.log("Codes match:", firstCode);
    } else {
        console.log("Codes do not match.");
    }
}

matchCode("ITEM-72", "ITEM-72");
matchCode(501, 702);


// 2. Equality narrowing with literal types

type TrafficLight = "red" | "yellow" | "green";

function handleTrafficLight(light: TrafficLight): void {
    if (light === "red") {
        console.log("Stop the vehicle.");
    } else if (light === "yellow") {
        console.log("Slow down and prepare to stop.");
    } else {
        console.log("You can move forward.");
    }
}

handleTrafficLight("red");
handleTrafficLight("yellow");
handleTrafficLight("green");