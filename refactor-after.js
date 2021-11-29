class TelephoneNumber {
    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number
    }

    get areaCode() {
        return this._areaCode;
    }
    set areaCode(arg) {
        this._areaCode = arg;
    }

    get number() {
        return this._number;
    }
    set number(arg) {
        this._number = arg;
    }

    // 搬移telephoneNumber函数
    get telephoneNumber() {
        return `(${this.areaCode})${this.number}`
    }
}
class Person {
    constructor(name, officeAreaCode, officeNumber) {
        this._name = name;
        this._telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber)
    }

    get name() {return this._name;}
    set name(arg)  {return this._name = arg;}
    // get telephoneNumber() { return `${this.name}：(${this.officeAreaCode})${this.officeNumber}`;}
    get telephoneNumber() {
        return `${this.name}：${this._telephoneNumber.telephoneNumber}`
    }
    get officeAreaCode() {return this._telephoneNumber.areaCode;}
    set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg;}
    get officeNumber() { return this._telephoneNumber.number;}
    set officeNumber(arg) { this._telephoneNumber.number = arg;}
}

module.exports = {
    Person,
}