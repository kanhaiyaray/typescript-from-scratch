type Formatter = (value: string | number) => string;

const formatValue: Formatter = (value) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
};

const formattedText = formatValue("typescript");
const formattedNumber = formatValue(875.5);

console.log("Formatted Text:", formattedText);
console.log("Formatted Number:", formattedNumber);
