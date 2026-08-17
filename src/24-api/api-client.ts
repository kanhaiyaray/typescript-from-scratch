interface ApiResponse<T> {
  success: boolean;
  data: T;
}

class ApiClient {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = (await response.json()) as T;

    return {
      success: response.ok,
      data
    };
  }
}

const client = new ApiClient();

client
  .get<{ id: number; title: string }>(
    "https://jsonplaceholder.typicode.com/posts/1"
  )
  .then((result) => {
    console.log("API result:", result);
  })
  .catch((error: unknown) => {
    console.log("API error:", error);
  });

  export {};