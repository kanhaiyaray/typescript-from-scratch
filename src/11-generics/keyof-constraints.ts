function readProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const satellite = {
  name: "Explorer-7",
  altitude: 540,
  active: true
};

const satelliteName = readProperty(satellite, "name");
const satelliteAltitude = readProperty(satellite, "altitude");
const satelliteActive = readProperty(satellite, "active");

console.log("Satellite:", satelliteName);
console.log("Altitude:", satelliteAltitude);
console.log("Active:", satelliteActive);
