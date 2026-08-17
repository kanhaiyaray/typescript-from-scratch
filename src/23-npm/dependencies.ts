interface DependencyMap {
  [packageName: string]: string;
}

const dependencies: DependencyMap = {
  typescript: "^5.0.0"
};

console.log("Dependencies:", dependencies);
