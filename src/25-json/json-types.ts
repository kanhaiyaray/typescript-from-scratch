interface User {
  id: number;
  name: string;
  active: boolean;
}

const user: User = {
  id: 1,
  name: "Aman",
  active: true
};

console.log("JSON-compatible object:", user);


export {};