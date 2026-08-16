type ExtractArrayItem<T> =
  T extends Array<infer Item>
    ? Item
    : never;

type ScoreItem = ExtractArrayItem<number[]>;
type LabelItem = ExtractArrayItem<string[]>;

const score: ScoreItem = 98;
const label: LabelItem = "Excellent";

console.log("Score:", score);
console.log("Label:", label);
