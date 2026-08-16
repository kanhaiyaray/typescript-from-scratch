class Vehicle {
  constructor(public model: string) {}

  move(): void {
    console.log(`${this.model} is moving.`);
  }
}

class ElectricScooter extends Vehicle {
  constructor(
    model: string,
    public batteryPercent: number
  ) {
    super(model);
  }

  charge(): void {
    this.batteryPercent = 100;
    console.log(`${this.model} is fully charged.`);
  }
}

const scooter = new ElectricScooter("Volt-X", 64);

scooter.move();
console.log("Battery:", scooter.batteryPercent + "%");
scooter.charge();
