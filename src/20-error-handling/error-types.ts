interface ErrorInfo {
  code: number;
  message: string;
}

const errorInfo: ErrorInfo = {
  code: 404,
  message: "Resource not found"
};

console.log("Error code:", errorInfo.code);
console.log("Error message:", errorInfo.message);
