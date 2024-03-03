import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 11);

let myCicle = new Circle(10, 11, 12);

let myRectangle = new Rectangle(10, 11, 12, 13);


// declare an arary of shapes ... initially empty
let theShapes: Shape[] = [];

// add the shapes to the array 
theShapes.push(myShape);
theShapes.push(myCicle);
theShapes.push(myRectangle);

for(let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}

