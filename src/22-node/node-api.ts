// 22-node/node-api.ts
// Creating a typed Node.js HTTP server

import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
} from "node:http";

interface HealthResponse {
  status: "ok";
  service: string;
  timestamp: string;
}

function createHealthResponse(): HealthResponse {
  return {
    status: "ok",
    service: "typescript-node-demo",
    timestamp: new Date().toISOString(),
  };
}

function handleRequest(
  request: IncomingMessage,
  response: ServerResponse
): void {
  const url = request.url ?? "/";

  response.setHeader(
    "Content-Type",
    "application/json"
  );

  if (url === "/health") {
    const health: HealthResponse =
      createHealthResponse();

    response.statusCode = 200;
    response.end(JSON.stringify(health));

    return;
  }

  if (url === "/") {
    response.statusCode = 200;

    response.end(
      JSON.stringify({
        message: "Welcome to my TypeScript Node API",
        routes: ["/", "/health"],
      })
    );

    return;
  }

  response.statusCode = 404;

  response.end(
    JSON.stringify({
      error: "Route not found",
    })
  );
}

const server = createServer(
  handleRequest
);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );

  console.log(
    `Health check: http://localhost:${PORT}/health`
  );
});