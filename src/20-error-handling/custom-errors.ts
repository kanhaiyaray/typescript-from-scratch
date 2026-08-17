class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Email is required");
} catch (error: unknown) {
  if (error instanceof ValidationError) {
    console.log("Validation error:", error.message);
  }
}
