function describeInput(input: string | number) {
  if (typeof input === "string") {
    console.log("Text:", input.toUpperCase());
  } else {
    console.log("Number:", input.toFixed(2));
  }
}

describeInput("frontend");
describeInput(728.45);
