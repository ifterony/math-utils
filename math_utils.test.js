const { add, subtract, divide } = require('./math_utils');

describe('Math functions', () => {
    test('should add two numbers correctly', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('should subtract two numbers correctly', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('should divide two numbers correctly', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('should handle division of a negative number', () => {
        expect(divide(-10, 2)).toBe(-5);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
});
