import { toDecorator } from '@decorator/toDecorator.js';
import { throttle } from '@function/throttle.js';

/**
 * The decorated function is invoked at most once per every `wait` milliseconds.
 * 
 * Look at {@link throttle} for the non-decorator version.
 * 
 * *Requires TypeScript >=5.0 or `experimentalDecorators` flag enabled.*
 * 
 * @example
 * ```typescript
 * class TestClass {
 *   @decThrottle(1000)
 *   testMethod() {
 *     console.log("Throttled!");
 *   }
 * }
 * 
 * const instance = new TestClass();
 * instance.testMethod(); // => "Throttled!" is logged once per second.
 * instance.testMethod(); // nothing happens
 * ```
 * @param wait The number of milliseconds to wait between invocations.
 */

export function decThrottle(wait: number) {
    return toDecorator(throttle)(wait);
}