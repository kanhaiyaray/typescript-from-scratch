enum ProgrammingLanguage {
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  Python = "Python",
  Rust = "Rust"
}

const currentLanguage: ProgrammingLanguage = ProgrammingLanguage.TypeScript;

console.log("Current language:", currentLanguage);

function learnLanguage(language: ProgrammingLanguage): void {
  console.log("Learning:", language);
}

learnLanguage(ProgrammingLanguage.Python);
learnLanguage(ProgrammingLanguage.Rust);
