type NestedNumber = number | {
  value: number;
  next: NestedNumber;
};

const sequence: NestedNumber = {
  value: 10,
  next: {
    value: 20,
    next: {
      value: 30,
      next: 40
    }
  }
};

function printSequence(item: NestedNumber): void {
  if (typeof item === "number") {
    console.log("Value:", item);
    return;
  }

  console.log("Value:", item.value);
  printSequence(item.next);
}

printSequence(sequence);
