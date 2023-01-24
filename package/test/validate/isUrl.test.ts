import { isUrl } from '@validate/isUrl.js';
import { describe, test, expect } from 'vitest';


describe('isUrl', () => {
    test('isUrl', () => {
        expect(isUrl('https://google.com')).toBe(true);
        expect(isUrl('google.com')).toBe(false);
    });
});