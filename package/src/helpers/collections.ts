import type { ArrayOrRecord } from '../types';

export function getValuesFromCollection<T>(collection: ArrayOrRecord<T>): T[] {
    return Array.isArray(collection) ? collection : Object.values(collection);
}
