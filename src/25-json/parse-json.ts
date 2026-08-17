const jsonText = '{"name":"Aman","age":22}';

const data: unknown = JSON.parse(jsonText);

console.log("Parsed JSON:", data);

export {};