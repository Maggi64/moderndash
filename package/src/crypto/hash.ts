import type { Jsonifiable } from '@type/Jsonifiable.js';

type SupportedAlgorithms = 'SHA-256' | 'SHA-384' | 'SHA-512';

let textEncoder: TextEncoder | undefined;

/**
 * Generates a hash from the given data using the specified algorithm.
 *
 * It uses the Web Crypto API to generate the hash.
 * 
 * *Note: If you need a secure hash use a specialized library like [crypto-js](https://www.npmjs.com/package/crypto-js) instead.*
 * 
 * @example
 * // Hash a string using the default algorithm (SHA-256)
 * await hash('hello world'); 
 * // => "b94d27b9934d3e08a52e52d7da7dabfac484efe37a53..."
 *
 * // Hash an object using the SHA-512 algorithm
 * await hash({ foo: 'bar', baz: 123 }, 'SHA-512');
 * // => "d8f3c752c6820e580977099368083f4266b569660558..."
 * 
 * @param data The data to hash, either as a string or a JSON-serializable object.
 * @param algorithm The hashing algorithm to use. Defaults to 'SHA-256'.
 * @returns A Promise that resolves to the hexadecimal representation of the hash.
 *
 * @throws {DOMException} If the specified algorithm is not supported by the Web Crypto API.
 */

export async function hash(data: Jsonifiable, algorithm: SupportedAlgorithms = 'SHA-256'): Promise<string> {
    textEncoder ??= new TextEncoder();

    const dataBuffer = typeof data === 'string'
        ? textEncoder.encode(data) 
        : textEncoder.encode(JSON.stringify(data));
    
    const hashBuffer = await crypto.subtle.digest(algorithm, dataBuffer);
    const hashArray = [...new Uint8Array(hashBuffer)];
    const hexValues = hashArray.map(b => b.toString(16).padStart(2, '0'));
    return hexValues.join('');
}
