interface Vehicle {
  brand: string;
  model: string;
}

interface ElectricVehicle extends Vehicle {
  batteryCapacity: number;
  chargingTime: number;
}

const electricCar: ElectricVehicle = {
  brand: "Tesla",
  model: "Model 3",
  batteryCapacity: 75,
  chargingTime: 60
};

console.log(electricCar.brand);
console.log(electricCar.model);
console.log(electricCar.batteryCapacity);
console.log(electricCar.chargingTime);