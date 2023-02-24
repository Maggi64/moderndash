/**
 * Attempts to execute a promise and returns an array with the result or error.
 * 
 * This is useful for handling errors in async functions without try/catch blocks.
 * @example
 * const [data, error] = await tryCatch(fetch('https://example.com/api'));
 * if (error) {
 *   console.error(`Error: ${error.message}`);
 * 
 * @param promise A Promise to be executed.
 * @returns A Promise that resolves to an array containing the result or error.  
 * If the Promise executes successfully, the array contains the result and a null error.  
 * If the Promise throws an error, the array contains undefined for the result and the error object.
 *
 * @template TRes The type of the result.
 */

export async function tryCatch<TRes>(promise: Promise<TRes>): Promise<[TRes, undefined] | [undefined, Error]> {
    try {
        const data = await promise;
        return [data, undefined];
    } catch (error) {
        if (error instanceof Error)
            return [undefined, error];

        throw error;
    }
}