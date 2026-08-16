interface PriceCalculator {
  (price: number, quantity: number): number;
}

const calculateTotal: PriceCalculator = (
  price,
  quantity
) => {
  return price * quantity;
};

const total = calculateTotal(250, 4);

console.log(total);