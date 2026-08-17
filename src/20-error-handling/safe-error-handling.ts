function safelyProcess(value: unknown): void {
  try {
    if (typeof value !== "string") {
      throw new Error("Expected a string");
    }

    console.log("Uppercase:", value.toUpperCase());
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Safe error:", error.message);
    }
  }
}

safelyProcess("typescript");
