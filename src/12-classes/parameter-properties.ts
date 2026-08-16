class ShippingContainer {
  constructor(
    public readonly containerId: string,
    private weightKg: number,
    protected destinationPort: string
  ) {}

  showDetails(): void {
    console.log("Container:", this.containerId);
    console.log("Weight:", this.weightKg, "kg");
    console.log("Destination:", this.destinationPort);
  }
}

const container = new ShippingContainer(
  "CONT-8842",
  1850,
  "Chennai Port"
);

container.showDetails();
