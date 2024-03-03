import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 11);
console.log(myShape.getInfo());

let myCicle = new Circle(10, 11, 12);
console.log(myCicle.getInfo());

let myRectangle = new Rectangle(10, 11, 12, 13);
console.log(myRectangle.getInfo());