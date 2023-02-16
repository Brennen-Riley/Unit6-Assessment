const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    it('return an array', () => {
        const result = shuffleArray([1, 2, 3]);
        expect(Array.isArray(result)).toBe(true)
    });

    it('returns an array of the same length as the argument sent in', () => {
        const input = [1, 2, 3];
        const result = shuffleArray(input);
        expect(result.length).toBe(input.length);
    });
});