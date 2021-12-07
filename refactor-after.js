function plumages(birds) {
    return birds.map (b => [b.name, createBird(b).plumage]);
}
function speeds(birds) {
    return birds.map(b => [b.name, new createBird(b).airSpeedVelocity]);
}

function createBird(bird) {
    switch(bird.type) {
        case 'EuropeanSwallow':
            return new EuropeanSwallow(bird);
        case 'AfricanSwallow':
            return new AfricanSwallow(bird);
        case 'NorwegianBlueParrot':
            return new NorwegianBlueParrot(bird);
        default:
            return new Bird(bird);
    }
}
class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage() {
        return "unknown"
    }

    get airSpeedVelocity() {
        return null;
    }
}

class EuropeanSwallow extends Bird {
    get plumage() {
        return 'average';
    }
    get airSpeedVelocity() {
        return 35;
    }
}
class AfricanSwallow extends Bird {
    get plumage() {
        return (this.numberOfCounts > 2) ? 'tired' : 'average';
    }
    get airSpeedVelocity() {
        return 40 - 2 * this.numberOfCounts;
    }
}
class NorwegianBlueParrot extends Bird {
    get plumage() {
        return (this.voltage > 100) ? "scorched" : "beautiful";
    }
    get airSpeedVelocity() {
        return (this.isNailed) ? 0 : 10 + this.voltage / 10;
    }
}
 
module.exports = {
    plumages,
    speeds,
}