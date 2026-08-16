const lighthouse = {
  name: "Beacon-12",
  height: 84,
  operational: true
};

type Lighthouse = typeof lighthouse;

const secondLighthouse: Lighthouse = {
  name: "Beacon-27",
  height: 96,
  operational: false
};

console.log("Original:", lighthouse);
console.log("Second:", secondLighthouse);
