type OrderReference = string & {
  readonly __brand: "OrderReference";
};

function createOrderReference(value: string): OrderReference {
  return value as OrderReference;
}

function printOrderReference(
  reference: OrderReference
): void {
  console.log("Order reference:", reference);
}

const reference = createOrderReference("ORD-58392");

printOrderReference(reference);
