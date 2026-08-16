class CoffeeMachine {
  brand: string = "BrewMaster";
  powerWatts: number = 1200;

  start(): void {
    console.log(`${this.brand} machine started at ${this.powerWatts}W.`);
  }
}

const machine = new CoffeeMachine();

console.log("Brand:", machine.brand);
machine.start();
