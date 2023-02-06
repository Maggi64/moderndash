import { toDecorator } from '@decorator/toDecorator.js';
import { minCalls } from '@function/minCalls.js';

/** 
 * Only invokes the decorated function after it's called more than `n` times.
 * 
 * Look at {@link minCalls} for the non-decorator version.
 * 
 * *Requires TypeScript >=5.0 or `experimentalDecorators` flag enabled.*
 * @example
 * class TestClass {
 *   @decAfter(2)
 *   testMethod() {
 *     return 1;
 *   }
 * }
 * const instance = new TestClass();
 * instance.testMethod(); // => undefined
 * instance.testMethod(); // => undefined
 * instance.testMethod(); // => 1
 *
 * @param n The number of calls before the decorated function is invoked.
 */

export const decMinCalls = toDecorator(minCalls);