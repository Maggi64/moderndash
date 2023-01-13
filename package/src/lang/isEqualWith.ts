import { isEqual } from '@lang/isEqual';

export function isEqualWith<T>(customizer: (value: T) => unknown, a: T, b: T): boolean {
    return isEqual(customizer(a), customizer(b));
}
