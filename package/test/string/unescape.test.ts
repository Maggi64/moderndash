import { test, expect, describe } from 'vitest';

import { unescape } from '@string/unescape';

describe('unescapeHTML', () => {
    test('should unescape HTML entities', () => {
        const html = '&lt;p&gt;Hello, World!&lt;/p&gt;';
        const str = unescape(html);
        expect(str).toBe('<p>Hello, World!</p>');
    });

    test('should return the original string if it does not contain HTML entities', () => {
        const html = 'Hello, World!';
        const str = unescape(html);
        expect(str).toBe(html);
    });
});
