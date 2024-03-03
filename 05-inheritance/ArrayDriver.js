"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 11);
let myCicle = new Circle_1.Circle(10, 11, 12);
let myRectangle = new Rectangle_1.Rectangle(10, 11, 12, 13);
// declare an arary of shapes ... initially empty
let theShapes = [];
// add the shapes to the array 
theShapes.push(myShape);
theShapes.push(myCicle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
