type FormatResult<T> =
  T extends string
    ? "TEXT"
    : T extends number
      ? "NUMBER"
      : T extends boolean
        ? "BOOLEAN"
        : "OTHER";

type TextFormat = FormatResult<string>;
type NumberFormat = FormatResult<number>;
type BooleanFormat = FormatResult<boolean>;

const textFormat: TextFormat = "TEXT";
const numberFormat: NumberFormat = "NUMBER";
const booleanFormat: BooleanFormat = "BOOLEAN";

console.log(textFormat);
console.log(numberFormat);
console.log(booleanFormat);
