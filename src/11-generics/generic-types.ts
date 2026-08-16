type Container<T> = {
  value: T;
  label: string;
};

const scoreBox: Container<number> = {
  value: 875,
  label: "Game Score"
};

const noteBox: Container<string> = {
  value: "Complete chapter 11",
  label: "Study Note"
};

console.log(scoreBox.label, ":", scoreBox.value);
console.log(noteBox.label, ":", noteBox.value);

type Result<T> = {
  data: T;
  success: boolean;
};

const calculationResult: Result<number> = {
  data: 144,
  success: true
};

console.log("Calculation:", calculationResult.data);
console.log("Success:", calculationResult.success);
