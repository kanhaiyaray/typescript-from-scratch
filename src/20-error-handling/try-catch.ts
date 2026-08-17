try {
  const result = JSON.parse('{"name":"Aman"}');

  console.log("Parsed data:", result);
} catch (error: unknown) {
  console.log("Parsing failed.");
}
