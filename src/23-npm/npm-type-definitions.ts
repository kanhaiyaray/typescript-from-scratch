interface TypeDefinition {
  package: string;
  purpose: string;
}

const typeDefinition: TypeDefinition = {
  package: "@types/node",
  purpose: "Provides TypeScript types for Node.js"
};

console.log(typeDefinition);
