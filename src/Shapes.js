export const ShapeTypes = {
  CIRCLE: 'circle',
  SQUARE: 'square',
  RECTANGLE: 'rectangle',
};
  
export class Shape {
  constructor(name) {
    this.name = name;
    this.rotationEnabled = false;
  }

  toggleRotation() {
    this.rotationEnabled = !this.rotationEnabled;
    return this.rotationEnabled;
  }
}
  
export class Circle extends Shape {
  constructor(radius) {
    super(ShapeTypes.CIRCLE);
    this.radius = radius;
  }
}
  
export class Rectangle extends Shape {
  constructor(width, height) {
    super(width === height ? ShapeTypes.SQUARE : ShapeTypes.RECTANGLE);
    this.width = width;
    this.height = height;
  }

  logInfo() {
    console.log(this);
  }
}

export class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}
  