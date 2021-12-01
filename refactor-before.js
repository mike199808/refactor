class Order {
    constructor(data) {
        this.priority = data.priority;
    }
}

function client1() {
    const orders = [
        new Order({priority: 'high'}),
        new Order({priority: 'rush'}),
        new Order({priority: 'low'}),
        new Order({priority: 'normal'}),
    ]
    return orders.filter(o => "high" === o.priority || "rush" === o.priority).length
}
module.exports = {
    client1,
}