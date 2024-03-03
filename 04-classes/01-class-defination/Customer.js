var Costumer = /** @class */ (function () {
    function Costumer(theFirst, theLast, theAge) {
        this.firstName = theFirst;
        this.lastName = theLast;
        this.age = theAge;
    }
    return Costumer;
}());
var myCustomer = new Costumer("Sujan", "Rana", 21);
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.age);
