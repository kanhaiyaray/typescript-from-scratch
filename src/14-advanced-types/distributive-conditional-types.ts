type Boxed<T> =
  T extends unknown
    ? { value: T }
    : never;

type StringOrNumberBox =
  Boxed<string | number>;

const textBox: StringOrNumberBox = {
  value: "advanced"
};

const numberBox: StringOrNumberBox = {
  value: 404
};

console.log("Text box:", textBox);
console.log("Number box:", numberBox);
