interface User {
  id: number;
  name: string;
}

async function loadUser(): Promise<void> {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const user = (await response.json()) as User;

    console.log("User:", user);
  } catch (error: unknown) {
    console.log("Fetch failed:", error);
  }
}

loadUser();
