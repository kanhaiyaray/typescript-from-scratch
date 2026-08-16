interface Device {
  name: string;
}

interface Device {
  manufacturer: string;
}

interface Device {
  warrantyYears: number;
}

const device: Device = {
  name: "Smart Display",
  manufacturer: "NovaTech",
  warrantyYears: 2
};

console.log(device.name);
console.log(device.manufacturer);
console.log(device.warrantyYears);