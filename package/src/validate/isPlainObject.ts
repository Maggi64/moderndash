export function isPlainObject(value: unknown): value is object {
    return value !== null && typeof value === 'object' && value.constructor === Object;
}
