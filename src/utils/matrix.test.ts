import { describe, it, expect } from "vitest";
import { addTokenToCol, getEmptyMatrix } from "./matrix";

describe('Matrix', () => {
    it('should return a matrix', () => {
        const matrix = getEmptyMatrix();

        expect(matrix).toBeInstanceOf(Array);
        
        matrix.forEach((value) => {
            expect(value).toBeInstanceOf(Array);
        })
    })

    it('should return a matrix with 7 columns', () => {
        const matrix = getEmptyMatrix();

        expect(matrix.length).toBe(7);
    })

    it('should return a matrix with 6 rows', () => {
        const matrix = getEmptyMatrix();

        matrix.forEach((value) => {
            expect(value.length).toBe(6);
        })
    })

    it('should add a red token in col 1 row 1', () => {
        const matrix = getEmptyMatrix();
        addTokenToCol(1, 'red', matrix);
        expect(matrix[0][0]).toBe('red');
    })

    it('should add a red token in col 2 row 1', () => {
        const matrix = getEmptyMatrix();
        addTokenToCol(2, 'red', matrix);
        expect(matrix[1][0]).toBe('red');
    })

    it('should return an out of range error', () => {
        const matrix = getEmptyMatrix();
        expect(() => addTokenToCol(8, 'red', matrix)).toThrow('Out of range');
    })

    it('should add a red token in col 1 row 2', () => {
        const matrix = getEmptyMatrix();
        addTokenToCol(1, 'red', matrix);
        addTokenToCol(1, 'red', matrix);
        expect(matrix[0][1]).toBe('red');
    })

    it('should return an full column error', () => {
        const matrix = getEmptyMatrix();
        addTokenToCol(1, 'red', matrix);
        addTokenToCol(1, 'red', matrix);
        addTokenToCol(1, 'red', matrix);
        addTokenToCol(1, 'red', matrix);
        addTokenToCol(1, 'red', matrix);
        addTokenToCol(1, 'red', matrix);
        expect(() => addTokenToCol(1, 'red', matrix)).toThrow('Full column');
    })
})