"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    calculateArea() {
        return Math.PI * Math.pow(this._raduis, 2);
    }
    constructor(theX, theY, _raduis) {
        super(theX, theY);
        this._raduis = _raduis;
    }
    get raduis() {
        return this._raduis;
    }
    set raduis(value) {
        this._raduis = value;
    }
    getInfo() {
        return super.getInfo() + `, radius=${this._raduis}`;
    }
}
exports.Circle = Circle;
