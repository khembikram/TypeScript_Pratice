import { Shape } from './Shape';

export class Circle extends Shape {

    calculateArea(): number {
        return Math.PI * Math.pow(this._raduis, 2);
    }

    constructor(theX: number, theY: number, private _raduis: number
    ) {
        super(theX, theY);
    }

    public get raduis(): number {
        return this._raduis;
    }
    public set raduis(value: number) {
        this._raduis = value;
    }

    getInfo(): string {
        return super.getInfo() + `, radius=${this._raduis}`;
    }
}