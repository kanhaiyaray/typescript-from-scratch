interface LogEntry {
  message: string;
  level: string;
}

function createLog<T = LogEntry>(entry: T): T {
  return entry;
}

const defaultLog = createLog({
  message: "Backup completed",
  level: "INFO"
});

console.log("Log message:", defaultLog.message);
console.log("Log level:", defaultLog.level);

const customLog = createLog({
  timestamp: 1723812000,
  code: 201
});

console.log("Custom code:", customLog.code);
console.log("Timestamp:", customLog.timestamp);
