import { expect, test, describe } from 'vitest';

import { escapeHtml } from '@string/escapeHtml';

describe('escapeToHTML', () => {
    test('should escape special characters to HTML entities', () => {
        const str = '<p>Hello, World!</p>';
        const html = escapeHtml(str);
        expect(html).toBe('&lt;p&gt;Hello, World!&lt;/p&gt;');
    });

    test('should return the original string if it does not contain special characters', () => {
        const str = 'Hello, World!';
        const html = escapeHtml(str);
        expect(html).toBe(str);
    });
});
