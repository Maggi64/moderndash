import { toDecorator } from "@decorator/toDecorator.js";
import { minCalls } from "@function/minCalls.js";

/** 
 * Only invokes the decorated function after it's called more than `n` times.
 * 
 * Look at {@link minCalls} for the non-decorator version.
 * 
 * *Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*
 * @example
 * ```typescript
 * class TestClass {
 *   @decMinCalls(2)
 *   testMethod() {
 *     return 1;
 *   }
 * }
 * const instance = new TestClass();
 * instance.testMethod(); // => undefined
 * instance.testMethod(); // => undefined
 * instance.testMethod(); // => 1
 * ```
 * @param n The number of calls before the decorated function is invoked.
 */

export function decMinCalls(n: number) {
    return toDecorator(minCalls)(n);
}