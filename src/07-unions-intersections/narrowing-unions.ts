function describeValue(value: string | number | boolean): void {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("Number value:", value.toFixed(2));
  } else {
    console.log("Boolean value:", value ? "TRUE" : "FALSE");
  }
}

describeValue("typescript");
describeValue(456.789);
describeValue(true);
