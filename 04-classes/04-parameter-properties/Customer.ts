class Customer {

    constructor( private _firstName: string, private _lastName: string, private _age: number) {
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }

}

let myCostumer = new Customer("Sujan", "Rana", 21);

console.log(myCostumer.firstName);
console.log(myCostumer.lastName);
console.log(myCostumer.age);


// get <space> property(....)
// set <space> prperty(....)