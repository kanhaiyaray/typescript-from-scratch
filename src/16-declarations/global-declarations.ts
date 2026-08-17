interface WindowConfig {
  appName: string;
  debug: boolean;
}

const config1: WindowConfig = {
  appName: "TS Learning",
  debug: true
};

console.log("Global-style configuration:", config1);
