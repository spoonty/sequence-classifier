const sequenceClassifier = require('./main');

// 0 - unordered
// 1 - strictly increasing
// 2 - not decreasing
// 3 - strictly decreasing
// 4 - not increasing
// 5 - constant

describe('Sequence classifier', () => {
    test('Should return unordered', () => {
        const array = [30, 27, 16, 89, 1];
        expect(sequenceClassifier(array)).toBe(0);
    })

    test('Should return strictly increasing', () => {
        const array = [4, 8, 15, 16, 23, 42];
        expect(sequenceClassifier(array)).toBe(1);
    })

    test('Should return not decreasing', () => {
        const array = [1, 1, 2, 3, 5, 8, 13];
        expect(sequenceClassifier(array)).toBe(2);
    })

    test('Should return strictly decreasing', () => {
        const array = [64, 32, 16, 8, 4];
        expect(sequenceClassifier(array)).toBe(3);
    })

    test('Should return not increasing', () => {
        const array = [9, 8, 7, 6, 6, 5, 4];
        expect(sequenceClassifier(array)).toBe(4);
    })

    test('Should return constant', () => {
        const array = [5, 5, 5, 5, 5, 5];
        expect(sequenceClassifier(array)).toBe(5);
    })
})