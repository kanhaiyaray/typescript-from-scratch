declare module "*.config" {
  const config: {
    name: string;
    version: string;
  };

  export default config;
}
