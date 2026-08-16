class Thermostat {
  private currentTemperature: number = 22;

  get temperature(): number {
    return this.currentTemperature;
  }

  set temperature(value: number) {
    if (value >= 10 && value <= 35) {
      this.currentTemperature = value;
    }
  }
}

const thermostat = new Thermostat();

thermostat.temperature = 27;

console.log("Room temperature:", thermostat.temperature);
