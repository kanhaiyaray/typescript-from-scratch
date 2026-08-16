export interface Coordinate {
  latitude: number;
  longitude: number;
}

export function describeCoordinate(
  coordinate: Coordinate
): string {
  return `${coordinate.latitude}, ${coordinate.longitude}`;
}
