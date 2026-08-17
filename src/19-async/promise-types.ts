// Promise types in TypeScript

interface Product {
  id: number;
  name: string;
  price: number;
}

function loadProduct(): Promise<Product> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 101,
        name: "TypeScript Course",
        price: 499,
      });
    }, 500);
  });
}

async function main(): Promise<void> {
  const product: Product = await loadProduct();

  console.log("Product ID:", product.id);
  console.log("Product Name:", product.name);
  console.log("Product Price:", product.price);
}

main();
