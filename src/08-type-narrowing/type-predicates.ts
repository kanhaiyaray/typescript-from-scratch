interface Laptop {
  model: string;
  ram: number;
}

interface Tablet {
  model: string;
  screenSize: number;
}

function isLaptop(device: Laptop | Tablet): device is Laptop {
  return "ram" in device;
}

function showDevice(device: Laptop | Tablet): void {
  if (isLaptop(device)) {
    console.log(
      `Laptop: ${device.model}, RAM: ${device.ram} GB`
    );
  } else {
    console.log(
      `Tablet: ${device.model}, Screen: ${device.screenSize} inches`
    );
  }
}

const laptop: Laptop = {
  model: "ProBook X2",
  ram: 16
};

const tablet: Tablet = {
  model: "TabView 11",
  screenSize: 11
};

showDevice(laptop);
showDevice(tablet);
