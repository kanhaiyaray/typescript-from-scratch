class SpaceStation {
  constructor(
    public stationName: string,
    public crewCapacity: number
  ) {}
}

type StationInstance = InstanceType<typeof SpaceStation>;

const station1: StationInstance = new SpaceStation(
  "Aurora Station",
  12
);

console.log("Station:", station1.stationName);
console.log("Crew capacity:", station1.crewCapacity);
