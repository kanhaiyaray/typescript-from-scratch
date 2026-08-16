import {
  convertKilometersToMiles as kmToMiles,
  conversionUnit as unit
} from "./export-alias";

const distance = kmToMiles(15);

console.log("Conversion:", unit);
console.log("Result:", distance);
