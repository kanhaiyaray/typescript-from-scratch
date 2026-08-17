// 22-node/fs.ts
// Working with the Node.js File System API

import {
  existsSync,
  writeFileSync,
  readFileSync,
  unlinkSync,
} from "node:fs";

const fileName = "node-journal.txt";

const journal = `
TypeScript makes Node.js development safer.
Types describe data before the program runs.
Small experiments make learning easier.
`;

writeFileSync(fileName, journal.trim(), "utf-8");

console.log("File created:", existsSync(fileName));

const content = readFileSync(fileName, "utf-8");

const words = content
  .split(/\s+/)
  .filter(Boolean);

console.log("Journal content:");
console.log(content);

console.log("Character count:", content.length);
console.log("Word count:", words.length);

// Clean up the temporary file
unlinkSync(fileName);

console.log("Temporary journal removed:", !existsSync(fileName));