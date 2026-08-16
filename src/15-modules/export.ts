export interface WeatherStation {
  name: string;
  temperature: number;
}

export const station: WeatherStation = {
  name: "North Ridge",
  temperature: 24
};

export function showStation(
  weatherStation: WeatherStation
): void {
  console.log(
    `${weatherStation.name}: ${weatherStation.temperature}�C`
  );
}
