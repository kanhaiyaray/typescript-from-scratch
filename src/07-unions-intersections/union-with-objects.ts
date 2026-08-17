interface PhysicalProduct {
  kind: "physical";
  weight: number;
}

interface DigitalProduct {
  kind: "digital";
  fileSizeMB: number;
}

type StoreProduct = PhysicalProduct | DigitalProduct;

const physicalItem: StoreProduct = {
  kind: "physical",
  weight: 2.5
};

const digitalItem: StoreProduct = {
  kind: "digital",
  fileSizeMB: 150
};

console.log("Physical product:", physicalItem);
console.log("Digital product:", digitalItem);

export {};