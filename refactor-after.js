class Shipment {
    constructor(shippingCompany, trackingNumber) {
        this._shippingCompany = shippingCompany;
        this._trackingNumber = trackingNumber;
    }
    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackingNumber}`
    }
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) { this._trackingNumber = arg;}
}

function client() {
    const aShipment = new Shipment('company1', 33);
    aShipment.shippingCompany = "company2";
    return aShipment.trackingInfo;
}
module.exports = {
    client,
}