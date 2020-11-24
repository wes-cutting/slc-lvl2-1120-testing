const sum = require('./sum');

describe('Adding Two Positives', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('adds 3 + 0 to equal 3', () => {
        expect(sum(3, 0)).toBe(3);
    });
    test('adds "a" + 1 to equal "a1"', () => {
        expect(sum('a', 1)).toBe('a1');
    });
})
