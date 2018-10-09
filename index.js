function insertIf(condition, ...elements) {
    return condition ? elements : [];
}

module.exports = insertIf;
module.exports.default = insertIf;
