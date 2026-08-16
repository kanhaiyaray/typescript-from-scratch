enum DeliveryResult {
  Delivered = 1,
  Delayed = "DELAYED",
  Cancelled = 0
}

const result1: DeliveryResult = DeliveryResult.Delivered;

console.log("Delivery result:", result1);
console.log("Delivered:", DeliveryResult.Delivered);
console.log("Delayed:", DeliveryResult.Delayed);
console.log("Cancelled:", DeliveryResult.Cancelled);
