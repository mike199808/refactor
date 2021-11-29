reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017};
function acquireReading() {
    return {
        ...reading
    }
}

function client1() {
    const aReading = acquireReading();
    const baseCharge = aReading.month * aReading.year * aReading.quantity;
    return baseCharge;
}

function client2() {
    const aReading = acquireReading();
    const baseCharge = aReading.month * aReading.year * aReading.quantity;
    const taxableCharge = Math.max(0, baseCharge - aReading.year);
    return taxableCharge;
}

function client3() {
    const aReading = acquireReading();
    const baseCharge = aReading.month * aReading.year * aReading.quantity;
    return baseCharge;
}
module.exports = {
    client1,
    client2,
    client3,
}