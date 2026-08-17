interface ExternalLibrary {
  name: string;
  version: string;
}

const library: ExternalLibrary = {
  name: "Example Library",
  version: "2.0.0"
};

console.log("Third-party library type example:", library);
