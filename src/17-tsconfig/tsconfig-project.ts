interface ProjectConfig {
  target: string;
  module: string;
  strict: boolean;
  outDir: string;
}

const project: ProjectConfig = {
  target: "ES2022",
  module: "CommonJS",
  strict: true,
  outDir: "dist"
};

console.log("Project configuration:", project);
