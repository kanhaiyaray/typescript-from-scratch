interface Product {
  id: number;
  name: string;
  price: number;
}

function parseProduct(json: string): Product {
  const value: unknown = JSON.parse(json);

  if (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value &&
    "price" in value &&
    typeof value.id === "number" &&
    typeof value.name === "string" &&
    typeof value.price === "number"
  ) {
    return value as Product;
  }

  throw new Error("Invalid product JSON");
}

const product = parseProduct(
  '{"id":10,"name":"Keyboard","price":2500}'
);

console.log("Typed product:", product);

export {};