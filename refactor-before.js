class Person {
    constructor(name, officeAreaCode, officeNumber) {
        this._name = name;
        this._officeAreaCode = officeAreaCode;
        this._officeNumber = officeNumber;
    }

    get name() {return this._name;}
    set name(arg)  {return this._name = arg;}
    get telephoneNumber() { return `${this.name}：(${this.officeAreaCode})${this.officeNumber}`;}
    get officeAreaCode() {return this._officeAreaCode;}
    set officeAreaCode(arg) { this._officeAreaCode = arg;}
    get officeNumber() { return this._officeNumber;}
    set officeNumber(arg) { this._officeNumber = arg;}
}

module.exports = {
    Person,
}