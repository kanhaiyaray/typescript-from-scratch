function calculateDistance(
  start: number,
  end: number
): number {
  return Math.abs(end - start);
}

type DistanceResult = ReturnType<typeof calculateDistance>;

const distance: DistanceResult = calculateDistance(18, 73);

console.log("Distance:", distance);
