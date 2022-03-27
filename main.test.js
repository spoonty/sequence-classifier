const sequenceClassifier = require('./main');

// 0 - unordered
// 1 - strictly increasing
// 2 - not decreasing
// 3 - strictly decreasing
// 4 - not increasing
// 5 - constant

describe('Sequence classifier', () => {
    test('Array of positive numbers returns unordered', () => {
        const array = [30, 27, 16, 89, 1];
        const result = sequenceClassifier(array);
        expect(result).toBe(0);
    })

    test('Array of positive numbers returns strictly increasing', () => {
        const array = [4, 8, 15, 16, 23, 42];
        const result = sequenceClassifier(array);
        expect(result).toBe(1);
    })

    test('Array of positive numbers returns not decreasing', () => {
        const array = [1, 1, 2, 3, 5, 8, 13];
        const result = sequenceClassifier(array);
        expect(result).toBe(2);
    })

    test('Array of positive numbers returns strictly decreasing', () => {
        const array = [64, 32, 16, 8, 4];
        const result = sequenceClassifier(array);
        expect(result).toBe(3);
    })

    test('Array of positive numbers returns not increasing', () => {
        const array = [9, 8, 7, 6, 6, 5, 4];
        const result = sequenceClassifier(array);
        expect(result).toBe(4);
    })

    test('Array of positive numbers returns constant', () => {
        const array = [5, 5, 5, 5, 5, 5];
        const result = sequenceClassifier(array);
        expect(result).toBe(5);
    })

    test('Array with one number returns constant', () => {
        const array = [5];
        const result = sequenceClassifier(array);
        expect(result).toBe(5);
    })

    test('Array of negative numbers returns strictly increasing', () => {
        const array = [-8, -4];
        const result = sequenceClassifier(array);
        expect(result).toBe(1);
    })

    test('Array of positive and negative numbers returns strictly decreasing', () => {
        const array = [1, 0, -1];
        const result = sequenceClassifier(array);
        expect(result).toBe(3);
    })

    test('Empty array raises exception', () => {
        const array = [];
        const result = (array) => sequenceClassifier(array);
        expect(() => result(array)).toThrow(Error);
    })

    test('Array with strings raises exception', () => {
        const array = ['Negative', 0, 'Positive'];
        const result = (array) => sequenceClassifier(array);
        expect(() => result(array)).toThrow(Error);
    })

    test('Array with float raises exception', () => {
        const array = [3.14, 2.7, 1];
        const result = (array) => sequenceClassifier(array);
        expect(() => result(array)).toThrow(Error);
    })

    test('Array with bigint raises exception', () => {
        const array = [10n, 5];
        const result = (array) => sequenceClassifier(array);
        expect(() => result(array)).toThrow(Error);
    })

    test('Null raises exception', () => {
        const array = null;
        const result = (array) => sequenceClassifier(array);
        expect(() => result(array)).toThrow(Error);
    })

    test('Undefined raises exception', () => {
        const array = undefined;
        const result = (array) => sequenceClassifier(array);
        expect(() => result(array)).toThrow(Error);
    })

    test('Dictionary raises exception', () => {
        const array = {name: "John", surname: "Doe"};
        const result = (array) => sequenceClassifier(array);
        expect(() => result(array)).toThrow(Error);
    })

    test('Function raises exception', () => {
        const array = () => alert(1);
        const result = (array) => sequenceClassifier(array);
        expect(() => result(array)).toThrow(Error);
    })
})