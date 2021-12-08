class TrackingInformation {
    constructor(shippingCompany, trackingNumber) {
        this._shippingCompany = shippingCompany;
        this._trackingNumber = trackingNumber;
    }
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) { this._trackingNumber = arg;}
    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}
class Shipment {
    constructor(shippingCompany, trackingNumber) {
        this._trackingInformation = new TrackingInformation(shippingCompany, trackingNumber);
    }
    get trackingInfo() {
        return this._trackingInformation.display;
    }
    get trackingInformation() {
        return this._trackingInformation;
    }
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}

function client() {
    const aShipment = new Shipment('company1', 33);
    aShipment.trackingInformation.shippingCompany = 'company2';
    return aShipment.trackingInformation.display;
}
module.exports = {
    client,
}