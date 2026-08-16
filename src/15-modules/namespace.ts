import {
  describeCoordinate
} from "./re-export";

const location = {
  latitude: 19.076,
  longitude: 72.8777
};

console.log(
  "Coordinate:",
  describeCoordinate(location)
);
