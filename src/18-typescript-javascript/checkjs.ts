function calculateDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log("Final price:", calculateDiscount(1000, 0.10));
