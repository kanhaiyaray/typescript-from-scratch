// TypeScript: never type

// 1. Function that always throws an error
function stopProcess(reason: string): never {
    throw new Error(reason);
}


// 2. Function with an infinite loop
function keepRunning(): never {
    while (true) {
        console.log("Process is still running...");
    }
}


// 3. never with exhaustive switch
type PaymentState = "paid" | "pending" | "cancelled";

function getPaymentMessage(state: PaymentState): string {
    switch (state) {
        case "paid":
            return "Payment was successful.";

        case "pending":
            return "Payment is being processed.";

        case "cancelled":
            return "Payment was cancelled.";

        default:
            return handleUnexpectedState(state);
    }
}

function handleUnexpectedState(value: never): never {
    throw new Error(`Unexpected payment state: ${value}`);
}

console.log(getPaymentMessage("paid"));
console.log(getPaymentMessage("pending"));
console.log(getPaymentMessage("cancelled"));


// 4. Understanding never
// The never type represents a situation that can never happen.
// A function returning never does not complete normally.