"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCicle = new Circle_1.Circle(10, 11, 12);
let myRectangle = new Rectangle_1.Rectangle(10, 11, 12, 13);
// declare an arary of shapes ... initially empty
let theShapes = [];
// add the shapes to the array 
theShapes.push(myCicle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
}
