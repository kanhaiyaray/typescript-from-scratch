type PaymentState =
  | "created"
  | "processing"
  | "completed"
  | "cancelled";

type FinalPaymentState = Extract<
  PaymentState,
  "completed" | "cancelled"
>;

const finalState: FinalPaymentState = "completed";

console.log("Final payment state:", finalState);

export {};
