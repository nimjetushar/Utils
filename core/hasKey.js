const hasOwnProperty = Object.prototype.hasOwnProperty;

function hasKey(obj, path) {
    return obj !== null && hasOwnProperty.call(obj, path);
}

export { hasKey };
