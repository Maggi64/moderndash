export type MinimumTwoArrays<TInput> = [TInput[], TInput[], ...TInput[][]];

export type IterateeFunction<T> = (value: T) => unknown;
export type PropertyShorthand<T> = keyof T;

export type RecordKey = string | number | symbol;
export type ArrayOrRecord<TInput> = TInput[] | Record<RecordKey, TInput>;

export type NoUnion<T, U = T> = T extends U ? [U] extends [T] ? T : never : never;

/**
 * @description Generic function type, should fit any function
 * @typeParam TFunc - The input function type
 */
export type GenericFunction<TFunc extends (...args: Parameters<TFunc>) => ReturnType<TFunc>> = (...args: Parameters<TFunc>) => ReturnType<TFunc>;