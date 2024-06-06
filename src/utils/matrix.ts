export const getEmptyMatrix = (): Array<Array<string|null>>  => {
    return [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
    ]
}

export const addTokenToCol = (col: number, color: string, matrix: Array<Array<string|null>>) => {
    if (col > 7) {
        throw new Error('Out of range');
    }

    const column = matrix[col - 1];
    const firstEmptyRow = column.findIndex((cell) => cell === null);

    if (firstEmptyRow === -1) {
        throw new Error('Full column');
    }

    matrix[col - 1][firstEmptyRow] = color;
}