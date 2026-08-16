interface Observatory {
  telescope: string;
  location: string;
  mirrors: number;
}

type ObservatoryKeys = keyof Observatory;

const selectedKey: ObservatoryKeys = "telescope";

console.log("Selected property:", selectedKey);
