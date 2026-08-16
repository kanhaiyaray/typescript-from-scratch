interface ElectricVehicle {
  batteryCapacity: number;
  chargingPort: string;
}

const vehicleData: unknown = {
  batteryCapacity: 75,
  chargingPort: "Type-2"
};

// Type narrowing safely checks the actual runtime structure.
if (
  typeof vehicleData === "object" &&
  vehicleData !== null &&
  "batteryCapacity" in vehicleData &&
  "chargingPort" in vehicleData &&
  typeof vehicleData.batteryCapacity === "number" &&
  typeof vehicleData.chargingPort === "string"
) {
  console.log("Battery:", vehicleData.batteryCapacity, "kWh");
  console.log("Charging port:", vehicleData.chargingPort);
}

// Type assertion tells TypeScript to trust the programmer.
const vehicle = vehicleData as ElectricVehicle;

console.log("Asserted battery:", vehicle.batteryCapacity);
console.log("Asserted port:", vehicle.chargingPort);
