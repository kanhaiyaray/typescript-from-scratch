interface NpmScripts {
  build: string;
  start: string;
  test: string;
}

const scripts: NpmScripts = {
  build: "tsc",
  start: "node dist/hello.js",
  test: "npm test"
};

console.log("NPM scripts:", scripts);
