// 22-node/process.ts
// Working with the Node.js process object

const argumentsFromTerminal: string[] = process.argv.slice(2);

console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);
console.log("Process ID:", process.pid);
console.log("Current directory:", process.cwd());

if (argumentsFromTerminal.length === 0) {
  console.log("No custom arguments supplied.");
} else {
  console.log("Arguments received:");

  argumentsFromTerminal.forEach(
    (argument: string, index: number) => {
      console.log(`${index + 1}. ${argument}`);
    }
  );
}

console.log("Process memory information:");
console.log(process.memoryUsage());