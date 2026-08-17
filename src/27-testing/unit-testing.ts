function add(a: number, b: number): number {
  return a + b;
}

const result = add(10, 20);

if (result === 30) {
  console.log("PASS: add() returned 30");
} else {
  console.log("FAIL: unexpected result");
}

export {};