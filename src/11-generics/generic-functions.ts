function preserveValue<T>(value: T): T {
  return value;
}

const temperature = preserveValue(28);
const cityName = preserveValue("Bengaluru");
const isOnline = preserveValue(true);

console.log("Temperature:", temperature);
console.log("City:", cityName);
console.log("Online:", isOnline);

function createPair<T>(first: T, second: T): [T, T] {
  return [first, second];
}

const coordinates = createPair(12, 45);

console.log("Coordinates:", coordinates);
