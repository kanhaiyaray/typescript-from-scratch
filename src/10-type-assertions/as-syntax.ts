interface WeatherReading {
  temperature: number;
  unit: string;
}

const sensorData: unknown = {
  temperature: 31,
  unit: "Celsius"
};

const weather = sensorData as WeatherReading;

console.log("Temperature:", weather.temperature);
console.log("Unit:", weather.unit);
