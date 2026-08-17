interface PackageJson {
  name: string;
  version: string;
  private: boolean;
}

const packageInfo: PackageJson = {
  name: "typescript-from-zero",
  version: "1.0.0",
  private: true
};

console.log("Package information:", packageInfo);
