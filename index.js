function insertIf(condition, element) {
    return condition ? [element] : [];
}

module.exports = insertIf;
module.exports.default = insertIf;