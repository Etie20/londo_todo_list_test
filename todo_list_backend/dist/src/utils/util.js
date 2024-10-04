function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
export var isEmpty = function(value) {
    if (value === null) {
        return true;
    } else if (typeof value !== 'number' && value === '') {
        return true;
    } else if (typeof value === 'undefined' || value === undefined) {
        return true;
    } else if (value !== null && (typeof value === "undefined" ? "undefined" : _type_of(value)) === 'object' && !Object.keys(value).length) {
        return true;
    } else {
        return false;
    }
};

//# sourceMappingURL=util.js.map