import type { Jsonifiable } from '@type/Jsonifiable.js';

type SupportedAlgorithms = 'SHA-256' | 'SHA-384' | 'SHA-512';

/**
 * Generates a hash from the given data using the specified algorithm.
 *
 * It uses the Web Crypto API to generate the hash.
 * 
 * *Note: If you need a secure hash use a library like [crypto-js](https://www.npmjs.com/package/crypto-js) instead.*
 * 
 * @example
 * // Generate a hash from a string using the default algorithm (SHA-256)
 * const hashValue = await hash('hello world'); 
 * // => "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9"
 *
 * // Generate a hash from an object using the SHA-512 algorithm
 * const data = { foo: 'bar', baz: 123 };
 * const hashValue = await hash(data, 'SHA-512');
 * // => "7746c5499046ec31901ef35d75bbf84c8f810ba6c5d5a9f5e539f8e1db5a1b429ebd858f7b8028a413240901df4ea752d9b3e1c32003b192be4f90e05df1fa2"
 * 
 * @param data The data to hash, either as a string or a JSON-serializable object.
 * @param algorithm The hashing algorithm to use. Defaults to 'SHA-256'.
 * @returns A Promise that resolves to the hexadecimal representation of the hash.
 *
 * @throws {DOMException} If the specified algorithm is not supported by the Web Crypto API.
 */

export async function hash(data: Jsonifiable, algorithm: SupportedAlgorithms = 'SHA-256'): Promise<string> {
    const encoder = new TextEncoder();
    const dataBuffer = typeof data === 'string'
        ? encoder.encode(data) 
        : encoder.encode(JSON.stringify(data));
  
    const hashBuffer = await crypto.subtle.digest(algorithm, dataBuffer);
    const hashArray = [...new Uint8Array(hashBuffer)];
    const hexValues = hashArray.map(b => b.toString(16).padStart(2, '0'));
    return hexValues.join('');
}