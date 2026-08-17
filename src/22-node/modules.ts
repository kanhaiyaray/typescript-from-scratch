// 22-node/modules.ts
// Using Node.js built-in modules with TypeScript

import {
  createHash,
  randomUUID,
} from "node:crypto";

interface UserToken {
  id: string;
  hash: string;
}

function createUserToken(username: string): UserToken {
  const id = randomUUID();

  const hash = createHash("sha256")
    .update(`${username}:${id}`)
    .digest("hex");

  return {
    id,
    hash,
  };
}

const token = createUserToken("typescript-student");

console.log("Generated ID:");
console.log(token.id);

console.log("\nSHA-256 hash:");
console.log(token.hash);

console.log(
  "\nHash length:",
  token.hash.length
);