interface UserResponse {
  id: number;
  name: string;
  email: string;
}

const response: UserResponse = {
  id: 1,
  name: "Aman",
  email: "aman@example.com"
};

console.log("Response:", response);

export {};