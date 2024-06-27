import type { GenericFunction } from "@type/GenericFunction.js";

type Tail<T extends unknown[]> = T extends [infer _Head, ...infer Tail] ? Tail : never;

/**
 * Transforms a function into a decorator function.
 * 
 * @example
 * ```typescript
 * function log(func: Function, message: string) {
 *   return function (...args: unknown[]) {
 *     console.log(message);
 *     return func(...args);
 *   };
 * }
 * 
 * const logger = toDecorator(log);
 * 
 * class TestClass {
 *   @logger("Hello world!")
 *   testMethod() {
 *     return 1;  
 *   }
 * }
 *  
 * const instance = new TestClass();
 * instance.testMethod(); 
 * // => Log "Hello World" and return 1
 * ```
 * @param func The function to transform.
 * @returns A decorator function that can be used to decorate a method.
 */
// waiting for https://github.com/evanw/esbuild/issues/104
export function toDecorator<TFunc extends GenericFunction<TFunc>>(func: TFunc) {
    return function (...args: Tail<Parameters<TFunc>>) {
        return function (originalMethod: unknown, _context: ClassMethodDecoratorContext) {
            const funcArgs = [originalMethod, ...args] as Parameters<TFunc>;
            return func(...funcArgs);
        };
    };
}