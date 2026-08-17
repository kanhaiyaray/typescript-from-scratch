function processError(error: unknown): void {
  if (error instanceof Error) {
    console.log("Error message:", error.message);
  } else {
    console.log("Unknown error:", error);
  }
}

processError(new Error("Database connection failed"));
