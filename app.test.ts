import { sum } from './app';

describe('sum', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('should return a correct sum', () => {
        expect(sum(5, 0)).toBe(5);
    });
});


