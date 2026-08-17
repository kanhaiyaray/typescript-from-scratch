interface ApiResponse<T> {
  data: T;
  message: string;
}

interface ApiUser {
  id: number;
  name: string;
  active: boolean;
}

const userResponse: ApiResponse<ApiUser> = {
  data: {
    id: 101,
    name: "Aman",
    active: true
  },
  message: "User fetched successfully"
};

console.log("User:", userResponse.data);
console.log("Message:", userResponse.message);

export {};