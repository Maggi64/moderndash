/**
 * Generic function type, should fit any function. Useful for parameterizing a function with a function.
 * @template TFunc - The input function type
 * 
 * @example
 * function log<TFunc extends GenericFunction<TFunc>>(func: TFunc): TFunc {
 *    return (...args: Parameters<TFunc>) => {
 *       console.log(...args);
 *      return func(...args);
 *   };
 * }
 * 
 * const add = (a: number, b: number) => a + b;
 * const addAndLog = log(add);
 */

export type GenericFunction<TFunc extends (...args: any) => void> = (...args: Parameters<TFunc>) => ReturnType<TFunc>; // eslint-disable-line @typescript-eslint/no-explicit-any