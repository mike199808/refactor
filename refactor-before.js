function plumages(birds) {
    return birds.map (b => [b.name, plumage(b)]);
}
function speeds(birds) {
    return birds.map(b => [b.name, airSpeedVelocity(b)]);
}
function plumage(bird) {
    switch(bird.type) {
        case 'EuropeanSwallow':
            return 'average';
        case 'AfricanSwallow':
            return (bird.numberOfCounts > 2) ? 'tired' : 'average';
        case 'NorwegianBlueParrot':
            return (bird.voltage > 100) ? "scorched" : "beautiful";
        default:
            return "unknown";
    }
}

function airSpeedVelocity(bird) {
    switch(bird.type) {
        case 'EuropeanSwallow':
            return 35;
        case 'AfricanSwallow':
            return 40 - 2 * bird.numberOfCounts;
        case 'NorwegianBlueParrot':
            return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
        default:
            return null;
    }
}
module.exports = {
    plumages,
    speeds,
}