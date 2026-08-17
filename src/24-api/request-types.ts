interface CreateUserRequest {
  name: string;
  email: string;
}

const request: CreateUserRequest = {
  name: "Aman",
  email: "aman@example.com"
};

console.log("Request:", request);
