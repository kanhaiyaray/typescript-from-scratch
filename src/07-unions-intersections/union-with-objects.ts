interface PhysicalProduct {
  name: string;
  weight: number;
}

interface DigitalProduct {
  name: string;
  fileSize: number;
}

type Product = PhysicalProduct | DigitalProduct;

const physicalItem: Product = {
  name: "Desk Lamp",
  weight: 1.8
};

const digitalItem: Product = {
  name: "Design Template",
  fileSize: 24
};

console.log("Physical Product:", physicalItem);
console.log("Digital Product:", digitalItem);
