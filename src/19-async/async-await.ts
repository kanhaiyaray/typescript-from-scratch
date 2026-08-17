async function loadProfile(): Promise<string> {
  return "Profile loaded successfully";
}

async function main(): Promise<void> {
  const result = await loadProfile();

  console.log(result);
}

main();

export {};