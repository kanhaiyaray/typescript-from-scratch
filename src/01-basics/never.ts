// TypeScript never

// 1. Function that never returns
function throwError(message: string): never {
    throw new Error(message);
}

// 2. Infinite loop

function infiniteLoop(): never {
    while (true) {
                              // function never finishes
    }
}

// 3. Never with switch

type NeverStatus = "success" | "error";

function checkStatus(status: NeverStatus): string {
    switch (status) {
        case "success":
            return "Success";

        case "error":
            return "Error";

        default:
            return neverReached(status);
    }
}

function neverReached(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
}

console.log(checkStatus("success"));
console.log(checkStatus("error"));


// 4. Type of never
// A never value cannot actually be created normally.
// It represents something that cannot happen.