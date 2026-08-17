interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface Product {
  id: number;
  name: string;
}

const response: ApiResponse<Product> = {
  success: true,
  data: {
    id: 10,
    name: "Laptop"
  }
};

console.log("Generic API response:", response);


export {};