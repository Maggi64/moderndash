export function isObjectKey(key: unknown): key is keyof object {
    return typeof key === 'string' || typeof key === 'number' || typeof key === 'symbol';
}
