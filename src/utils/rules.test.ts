import { describe, it, expect } from "vitest";
import { addTokenToCol, getEmptyMatrix } from "./matrix";
import { checkWin } from "./rules";

describe('Winning', () => {
    it('should return true if there is 4 red tokens in bottom left row', () => {
        const matrix = getEmptyMatrix();
        addTokenToCol(1, 'red', matrix);
        addTokenToCol(2, 'red', matrix);
        addTokenToCol(3, 'red', matrix);
        addTokenToCol(4, 'red', matrix);
        expect(checkWin(matrix)).toBe(true);
    })

    it('should return false if there is 3 red tokens in bottom left row', () => {
        const matrix = getEmptyMatrix();
        addTokenToCol(1, 'red', matrix);
        addTokenToCol(2, 'red', matrix);
        addTokenToCol(3, 'red', matrix);
        expect(checkWin(matrix)).toBe(false);
    })

    it('should return true if there is 4 red tokens in row 2', () => {
        const matrix = [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 'red', null, null, null, null],
            [null, 'red', null, null, null, null],
            [null, 'red', null, null, null, null],
            [null, 'red', null, null, null, null],
        ]

        expect(checkWin(matrix)).toBe(true);
    })

    it('should return true if there is 4 red tokens in column 1', () => {
        const matrix = [
            ['red', 'red', 'red', 'red', null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
        ]

        expect(checkWin(matrix)).toBe(true);
    })

    it('should return true if there is 4 red tokens in last column', () => {
        const matrix = [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            ['red', 'red', 'red', 'red', null, null],
        ]

        expect(checkWin(matrix)).toBe(true);
    })

    it('should return true if there is 4 red tokens on diagonal bottom left to middle right', () => {
        const matrix = [
            ['red', null, null, null, null, null],
            [null, 'red', null, null, null, null],
            [null, null, 'red', null, null, null],
            [null, null, null, 'red', null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
        ]

        expect(checkWin(matrix)).toBe(true);
    })

    it('should return true if there is 4 red tokens on diagonal middle left to middle right', () => {
        const matrix = [
            [null, null, 'red', null, null, null],
            [null, null, null, 'red', null, null],
            [null, null, null, null, 'red', null],
            [null, null, null, null, null, 'red'],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
        ]

        expect(checkWin(matrix)).toBe(true);
    })

    it('should return true if there is 4 red tokens on diagonal bottom right to middle left', () => {
        const matrix = [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 'red', null, null],
            [null, null, 'red', null, null, null],
            [null, 'red', null, null, null, null],
            ['red', null, null, null, null, null],
        ]

        expect(checkWin(matrix)).toBe(true);
    })

    it('should return true if there is 4 red tokens on diagonal middle right to middle left', () => {
        const matrix = [
            [null, null, null, 'red', null, null],
            [null, null, 'red', null, null, null],
            [null, 'red', null, null, null, null],
            ['red', null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
        ]

        expect(checkWin(matrix)).toBe(true);
    })
})