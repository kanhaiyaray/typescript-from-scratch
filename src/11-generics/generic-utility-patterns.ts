function mapValues<T, R>(
  values: T[],
  transform: (value: T) => R
): R[] {
  return values.map(transform);
}

const measurements = [12, 18, 25, 31];

const formattedMeasurements = mapValues(
  measurements,
  (value) => `${value}�C`
);

console.log("Formatted measurements:");
console.log(formattedMeasurements);

function findItem<T>(
  items: T[],
  predicate: (item: T) => boolean
): T | undefined {
  return items.find(predicate);
}

const firstLargeMeasurement = findItem(
  measurements,
  (value) => value > 20
);

console.log("First measurement above 20:", firstLargeMeasurement);
