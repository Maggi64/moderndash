/**
 * Generic function type, should fit any function
 * @template TFunc - The input function type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericFunction<TFunc extends (...args: any) => void> = (...args: Parameters<TFunc>) => ReturnType<TFunc>;