"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 11);
console.log(myShape.getInfo());
let myCicle = new Circle_1.Circle(10, 11, 12);
console.log(myCicle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(10, 11, 12, 13);
console.log(myRectangle.getInfo());
