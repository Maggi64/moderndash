import type { Collection } from '../types';

export function getValuesFromCollection<T>(collection: Collection<T>): T[] {
    return Array.isArray(collection) ? collection : Object.values(collection);
}
