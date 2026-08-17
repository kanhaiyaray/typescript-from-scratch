const user = {
  id: 1,
  name: "Aman",
  role: "Developer"
};

const json = JSON.stringify(user, null, 2);

console.log(json);

export {};