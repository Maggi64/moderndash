import { toDecorator } from "@decorator/toDecorator.js";
import { debounce } from "@function/debounce.js";

/**
 * Debounces the decorated function. Only calling it after a specified amount of time has passed without any new calls.
 * 
 * Look at {@link debounce} for the non-decorator version.
 * 
 * @example
 * ```typescript
 * class TestClass {
 *   @decDebounce(100)
 *   testMethod(str: string) {
 *     console.log("Debounced:", str);
 *   }
 * }
 * 
 * const instance = new TestClass();
 * instance.testMethod("Hello");
 * instance.testMethod("World");
 * // => Only the second invocation of `debouncedSayHello` is executed, after a delay of 1000ms.
 * ```
 * @param wait Milliseconds to wait before invoking the decorated function after the last invocation.
 */

export function decDebounce(wait: number) {
    return toDecorator(debounce)(wait);
}
