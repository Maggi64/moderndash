/**
 * Similar to [Promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race?retiredLocale=de) 
 * but allows to specify how many promises to wait for.
 *
 * @example
 * const promise1 = Promise.resolve(1);
 * const promise2 = Promise.resolve(2);
 * const promise2 = Promise.resolve(3);
 * 
 * const firstThree = await races(3, promise1, promise2, promise3);
 * // => [1, 2, 3]
 * @template TRes - The type of the result of the promises.
 * @param waitFor - The number of promises to wait for.
 * @param promises - The promises to wait for.
 * @returns A promise that resolves an array of the results of the first n promises.
 */

export function races<TRes>(waitFor: number, ...promises: Promise<TRes>[]): Promise<TRes[]> {
    return new Promise((resolve, reject) => {
        if (promises.length < waitFor)
            waitFor = promises.length;

        const results: TRes[] = [];
        let resolved = 0;
        for (const promise of promises) {
            promise.then((value) => {
                results.push(value);
                resolved++;
                if (resolved >= waitFor) {
                    resolve(results);
                }
            }).catch((error) => {
                reject(error);
            });
        }
    });
}