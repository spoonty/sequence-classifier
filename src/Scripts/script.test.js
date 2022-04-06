import {sequenceClassifier} from "./script";

// 0 - unordered
// 1 - strictly increasing
// 2 - not decreasing
// 3 - strictly decreasing
// 4 - not increasing
// 5 - constant

describe('Sequence classifier', () => {
    test.each([
        {array: [30, 27, 16, 89, 1], expected: 0, name: 'Array of positive numbers returns unordered'},
        {array: [4, 8, 15, 16, 23, 42], expected: 1, name: 'Array of positive numbers returns strictly increasing'},
        {array: [1, 1, 2, 3, 5, 8, 13], expected: 2, name: 'Array of positive numbers returns not decreasing'},
        {array: [64, 32, 16, 8, 4], expected: 3, name: 'Array of positive numbers returns strictly decreasing'},
        {array: [9, 8, 7, 6, 6, 5, 4], expected: 4, name: 'Array of positive numbers returns not increasing'},
        {array: [5, 5, 5, 5, 5, 5], expected: 5, name: 'Array of positive numbers returns constant'},
        {array: [5], expected: 5, name: 'Array with one number returns constant'},
        {array: [-8, -4], expected: 1, name: 'Array of negative numbers returns strictly increasing'},
        {array: [1, 0, -1], expected: 3, name: 'Array of positive and negative numbers returns strictly decreasing'}
    ])("$name", ({array, expected}) => {
        expect(sequenceClassifier(array)).toBe(expected);
    })

    test.each([
        {array: [], name: 'Empty array raises exception'},
        {array: ['Negative', 0, 'Positive'], name: 'Array with strings raises exception'},
        {array: [3.14, 2.7, 1], name: 'Array with float raises exception'},
        {array: [BigInt(Number.MAX_SAFE_INTEGER), 5], name: 'Array with bigint raises exception'},
        {array: null, name: 'Null raises exception'},
        {array: undefined, name: 'Undefined raises exception'},
        {array: {name: "John", surname: "Doe"}, name: 'Dictionary raises exception'},
        {array: () => alert(1), name: 'Function raises exception'}
    ])("$name", ({array}) => {
        expect(() => sequenceClassifier(array)).toThrow(Error);
    })
})