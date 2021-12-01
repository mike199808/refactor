class Priority {
    constructor(value) {
        if (value instanceof Priority) return value;
        if (Priority.legalValues().includes(value)) {
            this._value = value;
        } else {
            throw new Error(`<${value}> is invalid for Priority`)
        }
    }
    toString() {
        return this._value;
    }
    static legalValues() { return ['low', 'normal', 'high', 'rush'];}
    get _index() { return Priority.legalValues().findIndex(s => s === this._value)}

    equals(other) { return this._index === other._index;}
    higherThan(other) { return this._index > other._index}
    lowerThan(other) { return this._index < other._index}

}
class Order {
    constructor(data) {
        this.priority = data.priority;
    }
    get priority() {return this._priority;}
    get priorityString() {return this._priority.toString();}
    set priority(arg) {this._priority = new Priority(arg);}
}

function client1() {
    const orders = [
        new Order({priority: 'high'}),
        new Order({priority: 'rush'}),
        new Order({priority: 'low'}),
        new Order({priority: 'normal'}),
    ]
    return orders.filter(o => o.priority.higherThan(new Priority('normal'))).length

}
module.exports = {
    client1,
}