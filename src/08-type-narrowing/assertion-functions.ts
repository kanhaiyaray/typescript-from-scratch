function getConfiguration(): string | undefined {
  return "production";
}

function assertDefined(
  value: string | undefined
): asserts value is string {
  if (value === undefined) {
    throw new Error("Configuration value is missing.");
  }
}

const configuration = getConfiguration();

assertDefined(configuration);

console.log("Configuration:", configuration.toUpperCase());
