interface Camera {
  model: string;
  megapixels: number;
  active: boolean;
}

type OptionalCamera = {
  [Property in keyof Camera]?: Camera[Property];
};

const cameraSettings: OptionalCamera = {
  model: "Lumina X5",
  active: true
};

console.log("Camera settings:", cameraSettings);
