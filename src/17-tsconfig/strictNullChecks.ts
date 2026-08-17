function findUsername(id: number): string | null {
  if (id === 1) {
    return "Aman";
  }

  return null;
}

const username11 = findUsername(1);

if (username11 !== null) {
  console.log("Username:", username11);
}
