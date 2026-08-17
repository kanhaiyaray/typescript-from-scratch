interface ApiError {
  status: number;
  message: string;
  timestamp: string;
}

const error: ApiError = {
  status: 404,
  message: "User not found",
  timestamp: new Date().toISOString()
};

console.log("API error:", error);
