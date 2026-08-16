function createCoordinate(
  latitude: number,
  longitude: number,
  label: string
): string {
  return `${label}: ${latitude}, ${longitude}`;
}

type CoordinateParameters = Parameters<typeof createCoordinate>;

const locationArguments: CoordinateParameters = [
  28.6139,
  77.209,
  "Delhi"
];

console.log(createCoordinate(...locationArguments));
