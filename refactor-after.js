function mergeObject(target, source) {
    return {
        ...target,
        ...source,
    }
}

module.exports = mergeObject;