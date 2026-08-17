// 22-node/path.ts
// Working with file and directory paths

import path from "node:path";

const projectRoot = path.join(
  "E:",
  "projects",
  "typescript-from-zero"
);

const sourceFile = path.join(
  projectRoot,
  "src",
  "22-node",
  "path.ts"
);

const parsed = path.parse(sourceFile);

console.log("Project root:", projectRoot);
console.log("Source file:", sourceFile);

console.log("Directory:", parsed.dir);
console.log("File name:", parsed.base);
console.log("File name without extension:", parsed.name);
console.log("Extension:", parsed.ext);

const relativePath = path.relative(
  projectRoot,
  sourceFile
);

console.log("Relative path:", relativePath);

console.log(
  "Is absolute path:",
  path.isAbsolute(sourceFile)
);