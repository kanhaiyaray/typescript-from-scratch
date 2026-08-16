function combineValues<A, B, C>(
  first: A,
  second: B,
  third: C
): [A, B, C] {
  return [first, second, third];
}

const mixedData = combineValues(
  "Temperature",
  26.5,
  true
);

console.log("Combined data:", mixedData);

function createRecord<K, V>(key: K, value: V): {
  key: K;
  value: V;
} {
  return {
    key,
    value
  };
}

const record = createRecord(
  "sensor-id",
  9087
);

console.log("Record key:", record.key);
console.log("Record value:", record.value);
