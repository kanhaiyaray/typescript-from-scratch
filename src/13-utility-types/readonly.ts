interface CameraSettings {
  resolution: number;
  frameRate: number;
  stabilization: boolean;
}

const fixedSettings: Readonly<CameraSettings> = {
  resolution: 1080,
  frameRate: 60,
  stabilization: true
};

console.log("Camera resolution:", fixedSettings.resolution);
console.log("Frame rate:", fixedSettings.frameRate);
