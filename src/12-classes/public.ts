class Aquarium {
  public tankName: string;
  public capacityLitres: number;

  constructor(name: string, capacity: number) {
    this.tankName = name;
    this.capacityLitres = capacity;
  }

  describe(): void {
    console.log(`${this.tankName} holds ${this.capacityLitres} litres.`);
  }
}

const aquarium = new Aquarium("Blue Reef", 850);

console.log(aquarium.tankName);
aquarium.describe();
