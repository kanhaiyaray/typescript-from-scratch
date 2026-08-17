async function loadConfiguration(): Promise<string> {
  try {
    const config = await Promise.resolve("Production configuration");

    console.log("Configuration:", config);

    return config;
  } catch (error: unknown) {
    console.log("Configuration error:", error);
    return "Fallback configuration";
  }
}

loadConfiguration();

export {};