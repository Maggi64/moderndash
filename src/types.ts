export type MinimumTwoArrays<T> = [T[], T[], ...T[][]];

export type IterateeFunction<T> = (value: T) => unknown;
export type PropertyShorthand<T> = keyof T;

export type RecordKey = string | number | symbol;
