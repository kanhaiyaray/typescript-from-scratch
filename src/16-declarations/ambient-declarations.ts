declare const environmentName: string;

interface ApplicationConfig {
  name: string;
  version: string;
}

declare const configration: ApplicationConfig;

console.log("Application:", configration.name);
console.log("Version:", configration.version);
