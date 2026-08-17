function getUser(): Promise<string> {
  return Promise.resolve("Aman");
}

getUser().then((user) => {
  console.log("User:", user);
});
