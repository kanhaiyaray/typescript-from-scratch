interface ApiResult {
  status: number;
  data: string;
}

function mockApi(): ApiResult {
  return {
    status: 200,
    data: "API success"
  };
}

const result = mockApi();

console.log("API status:", result.status);
console.log("API data:", result.data);
console.log("API test passed:", result.status === 200);

export {};