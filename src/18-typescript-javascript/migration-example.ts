interface Order {
  id: number;
  product: string;
  quantity: number;
}

function calculateOrderTotal(order: Order, price: number): number {
  return order.quantity * price;
}

const order: Order = {
  id: 501,
  product: "Laptop",
  quantity: 2
};

console.log("Order:", order);
console.log("Total:", calculateOrderTotal(order, 50000));
