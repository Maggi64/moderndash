export type MinimumTwoArrays<T> = [T[], T[], ...T[][]];

export type IterateeFunction<T> = (value: T) => unknown;
export type PropertyShorthand<T> = keyof T;

export type RecordKey = string | number | symbol;

export type ArrayOrRecord<T> = T[] | Record<RecordKey, T>;
export type NoUnion<T, U = T> = T extends U ? [U] extends [T] ? T : never : never; 