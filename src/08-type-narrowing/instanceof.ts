class Bicycle {
  constructor(
    public brand: string,
    public gears: number
  ) {}

  showDetails(): void {
    console.log(`${this.brand} bicycle has ${this.gears} gears.`);
  }
}

class Camera {
  constructor(
    public brand: string,
    public megapixels: number
  ) {}

  showDetails(): void {
    console.log(`${this.brand} camera has ${this.megapixels} MP.`);
  }
}

function displayEquipment(
  equipment: Bicycle | Camera
): void {
  if (equipment instanceof Bicycle) {
    console.log("Equipment type: Bicycle");
    equipment.showDetails();
  } else {
    console.log("Equipment type: Camera");
    equipment.showDetails();
  }
}

const cycle = new Bicycle("Trek", 18);
const camera = new Camera("Canon", 24);

displayEquipment(cycle);
displayEquipment(camera);
