import { test, describe, expect } from 'vitest';

import { hash } from '@crypto/hash.js';

describe('hash', () => {
    test('generate a hash from a string using the default algorithm (SHA-256)', async () => {
        const hashValue = await hash('hello world');
        expect(hashValue).toEqual('b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9');
    });

    test('generate a hash from an object using the SHA-512 algorithm', async () => {
        const data = { foo: 'bar', baz: 123 };
        const hashValue = await hash(data, 'SHA-512');
        expect(hashValue).toEqual('d8f3c752c6820e580977099368083f4266b569660558280f65494e39fe022e94ddf6f73037f9f83e67c868796c1c4a508d8d85952d04ccc7105fdbfda526e287');
    });
});