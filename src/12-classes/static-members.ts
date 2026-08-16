class MathLibrary {
  static readonly version: string = "2.4.1";

  static square(value: number): number {
    return value * value;
  }

  static cube(value: number): number {
    return value * value * value;
  }
}

console.log("Library version:", MathLibrary.version);
console.log("Square:", MathLibrary.square(8));
console.log("Cube:", MathLibrary.cube(4));
