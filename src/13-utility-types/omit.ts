interface ServerConfig {
  host: string;
  port: number;
  username: string;
  password: string;
}

type PublicServerConfig = Omit<ServerConfig, "password">;

const config: PublicServerConfig = {
  host: "localhost",
  port: 8080,
  username: "administrator"
};

console.log("Public configuration:", config);
