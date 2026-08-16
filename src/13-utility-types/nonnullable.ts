function locateStation(): string | null {
  return "Central Station";
}

type Station = NonNullable<
  ReturnType<typeof locateStation>
>;

const station: Station = "Central Station";

console.log("Station:", station);
