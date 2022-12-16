export function isEqual(value1: unknown, value2: unknown): boolean {
    if (value1 === value2) return true;

    if (Array.isArray(value1) && Array.isArray(value2)) {
        return isSameArray(value1, value2);
    }

    if (value1 instanceof RegExp && value2 instanceof RegExp) {
        return value1.toString() === value2.toString();
    }

    if (isObject(value1) && isObject(value2)) {
        return isSameObject(value1, value2);
    }

    return false;
}

function isObject(value: unknown): value is object {
    return value !== null && typeof value === 'object';
}

function isSameObject(value1: object, value2: object) {
    // check if the objects have the same keys
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);
    if (!isEqual(keys1, keys2)) return false;

    // check if the values of each key in the objects are equal
    for (const key of keys1) {
        if (!isEqual(value1[key], value2[key])) return false;
    }

    // the objects are deeply equal
    return true;
}

function isSameArray(value1: unknown[], value2: unknown[]) {
    // check if the arrays have the same length
    if (value1.length !== value2.length) return false;

    // check if the values of each element in the arrays are equal
    for (const [i, element] of value1.entries()) {
        if (!isEqual(element, value2[i])) return false;
    }

    return true;
}
