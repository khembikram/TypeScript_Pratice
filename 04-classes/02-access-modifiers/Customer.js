var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast, theAge) {
        this._firstName = theFirst;
        this._lastName = theLast;
        this._age = theAge;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCostumer = new Customer("Sujan", "Rana", 21);
console.log(myCostumer.firstName);
console.log(myCostumer.lastName);
console.log(myCostumer.age);
// get <space> property(....)
// set <space> prperty(....)
