interface User {
  id: number;
  name: string;
}

function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const object = value as Record<string, unknown>;

  return (
    typeof object.id === "number" &&
    typeof object.name === "string"
  );
}

const json = '{"id":1,"name":"Aman"}';

const data: unknown = JSON.parse(json);

if (isUser(data)) {
  console.log("Valid user:", data.name);
} else {
  console.log("Invalid user data.");
}


export {};