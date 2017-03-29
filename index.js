function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
}

function Side(length) {
  this.length = length;
}

function Shape() {}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Polygon(array) {
  Shape.call();
  this.sides = array;
}

Polygon.prototype = Object.create(Shape.prototype)

Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function() {
  return this.sides.map(side => side.length).reduce((a, b) => a + b, 0);
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

function Circle(radius) {
  Shape.call();
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return this.radius * 2;
}

Circle.prototype.area = function() {
  return Math.PI * this.radius^2;
}
Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
}

function Quadrilateral(w,x,y,z) {
  var a = new Side(w);
  var b = new Side(x);
  var c = new Side(y);
  var d = new Side(z);
  Polygon.call(this, [a,b,c,d]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(x,y) {
  this.width = x;
  this.height = y;
  Quadrilateral.call(this, x,x,y,y)
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.height * this.width;
}

function Square(x) {
  this.length = x;
  Rectangle.call(this, x,x)
}

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  var string = "";
  for (var prop in Square) {
    if (Square.hasOwnProperty(prop)) {
      string.concat(prop)
    }
  }
  return string;
}

function Triangle(x,y,z) {
  var b = new Side(x);
  var c = new Side(y);
  var d = new Side(z);
  Polygon.call(this, [b,c,d]);
}

Triangle.prototype = Object.create(Polygon.prototype)

Triangle.prototype.constructor = Triangle
