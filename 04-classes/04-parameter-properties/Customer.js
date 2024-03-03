"use strict";
class Customer {
    constructor(_firstName, _lastName, _age) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
let myCostumer = new Customer("Sujan", "Rana", 21);
console.log(myCostumer.firstName);
console.log(myCostumer.lastName);
console.log(myCostumer.age);
// get <space> property(....)
// set <space> prperty(....)
