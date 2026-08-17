// 22-node/environment-variables.ts
// Reading environment variables safely

type Environment = "development" | "production" | "test";

interface AppConfig {
  environment: Environment;
  port: number;
  debug: boolean;
}

function getEnvironment(value: string | undefined): Environment {
  if (
    value === "production" ||
    value === "test"
  ) {
    return value;
  }

  return "development";
}

function getPort(value: string | undefined): number {
  const port = Number(value);

  if (Number.isInteger(port) && port > 0) {
    return port;
  }

  return 3000;
}

function getBoolean(
  value: string | undefined
): boolean {
  return value === "true";
}

const config: AppConfig = {
  environment: getEnvironment(
    process.env.NODE_ENV
  ),

  port: getPort(
    process.env.PORT
  ),

  debug: getBoolean(
    process.env.DEBUG
  ),
};

console.log("Application configuration:");
console.log(config);

console.log(
  `Running ${config.environment} server on port ${config.port}`
);

console.log(
  "Debug mode:",
  config.debug ? "enabled" : "disabled"
);