class Costumer {
    firstName: string;
    lastName: string;
    age: number;

    constructor(theFirst: string, theLast: string, theAge: number){
        this.firstName = theFirst;
        this.lastName = theLast;
        this.age = theAge;
    }
}

let myCustomer = new Costumer("Sujan", "Rana",21);

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.age);


// get <space> property(....)
// set <space> prperty(....)