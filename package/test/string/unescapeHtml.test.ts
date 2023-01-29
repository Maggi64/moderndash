import { test, expect, describe } from 'vitest';

import { unescapeHtml } from '@string/unescapeHtml';

describe('unescapeHTML', () => {
    test('unescape HTML entities', () => {
        const html = '&lt;p&gt;Hello, World!&lt;/p&gt;';
        const str = unescapeHtml(html);
        expect(str).toBe('<p>Hello, World!</p>');
    });

    test('return the original string if it does not contain HTML entities', () => {
        const html = 'Hello, World!';
        const str = unescapeHtml(html);
        expect(str).toBe(html);
    });
});
