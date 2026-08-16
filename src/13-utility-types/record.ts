type Planet = "Mercury" | "Venus" | "Earth" | "Mars";

type PlanetInfo = {
  radiusKm: number;
  hasAtmosphere: boolean;
};

const planets: Record<Planet, PlanetInfo> = {
  Mercury: {
    radiusKm: 2439,
    hasAtmosphere: false
  },
  Venus: {
    radiusKm: 6051,
    hasAtmosphere: true
  },
  Earth: {
    radiusKm: 6371,
    hasAtmosphere: true
  },
  Mars: {
    radiusKm: 3389,
    hasAtmosphere: true
  }
};

console.log("Earth radius:", planets.Earth.radiusKm);
console.log("Mars atmosphere:", planets.Mars.hasAtmosphere);
