enum TrafficLight1 {
  Red,
  Yellow,
  Green
}

const signal: TrafficLight1 = TrafficLight1.Green;

console.log("Traffic signal:", TrafficLight1[signal]);
console.log("Red value:", TrafficLight1.Red);
console.log("Yellow value:", TrafficLight1.Yellow);
console.log("Green value:", TrafficLight1.Green);
