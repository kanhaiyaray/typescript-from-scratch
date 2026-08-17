async function fetchApi(): Promise<void> {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data: unknown = await response.json();

    console.log("API data:", data);
  } catch (error: unknown) {
    console.log("API request failed:", error);
  }
}

fetchApi();
