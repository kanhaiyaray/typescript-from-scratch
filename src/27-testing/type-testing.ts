interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Aman"
};

console.log("Type test object:", user);

const isValidType =
  typeof user.id === "number" &&
  typeof user.name === "string";

console.log("Type test passed:", isValidType);


export {};