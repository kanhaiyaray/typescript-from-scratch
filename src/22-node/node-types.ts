// 22-node/node-types.ts
// Node.js specific TypeScript types

import type { IncomingMessage, ServerResponse } from "node:http";

function describeRequest(request: IncomingMessage): string {
  const method = request.method ?? "UNKNOWN";
  const url = request.url ?? "/";

  return `${method} ${url}`;
}

function sendResponse(response: ServerResponse, message: string): void {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end(message);
}

// Demonstration objects
const fakeRequest = {
  method: "GET",
  url: "/dashboard",
} as IncomingMessage;

console.log("Request:", describeRequest(fakeRequest));

// We don't actually start a server here.
console.log("Node HTTP types loaded successfully.");