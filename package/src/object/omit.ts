import { pick } from './pick.js';

export function omit<TObj extends object, Key extends keyof TObj>(object: TObj, keysToOmit: Key[]): Omit<TObj, Key> {
    const keys = Object.keys(object);
    const filteredKeys = keys.filter(key => !keysToOmit.includes(key as Key)) as Exclude<keyof TObj, Key>[];

    return pick(object, filteredKeys);
}