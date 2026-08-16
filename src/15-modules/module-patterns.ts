namespace Geometry {
  export function rectangleArea(
    width: number,
    height: number
  ): number {
    return width * height;
  }

  export function circleArea(
    radius: number
  ): number {
    return Math.PI * radius * radius;
  }
}

console.log(
  "Rectangle area:",
  Geometry.rectangleArea(12, 8)
);

console.log(
  "Circle area:",
  Geometry.circleArea(5)
);
