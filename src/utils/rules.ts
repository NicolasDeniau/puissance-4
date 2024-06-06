export const RED_TOKEN = 'red';
export const YELLOW_TOKEN = 'yellow';

const winningSequenceRed = [RED_TOKEN, RED_TOKEN, RED_TOKEN, RED_TOKEN].join('-');
const winningSequenceYellow = [YELLOW_TOKEN, YELLOW_TOKEN, YELLOW_TOKEN, YELLOW_TOKEN].join('-');

export const checkWin = (matrix: Array<Array<string|null>>): boolean => {
    // Check rows
    for (let index = 0; index < matrix.length; index++) {
        const row = matrix.map((_, i) => getCase(matrix, i, index));
        if (checkSequence(row)) return true;
    }

    // Check columns
    for (let index = 0; index < matrix.length; index++) {
        const column = matrix[index];
        if (checkSequence(column)) return true;
    }

    // Check diagonals to left
    if (checkDiagonal(matrix)) return true;

    // Check diagonals to right
    const reversedMatrix = matrix.reverse();
    if (checkDiagonal(reversedMatrix)) return true;

    return false;
}

const checkSequence = (sequence: Array<string|null>): boolean => {
    const joinedSequence = sequence.join('-');
    return joinedSequence.includes(winningSequenceRed) || joinedSequence.includes(winningSequenceYellow);
}

const getCase = (matrix: Array<Array<string|null>>, colIndex: number, rowIndex: number): string|null => {
    if (colIndex >= 0 && colIndex < matrix.length && rowIndex >= 0 && rowIndex < matrix[colIndex].length) {
        return matrix[colIndex][rowIndex];
    }
    
    return null;
}

const checkDiagonal = (matrix: Array<Array<string|null>>): boolean => {
    for (let colIndex = 0; colIndex < matrix.length; colIndex++) {
        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            let diagonal: Array<string|null> = []

            diagonal = [
                getCase(matrix, colIndex, rowIndex),
                getCase(matrix, colIndex + 1, rowIndex + 1),
                getCase(matrix, colIndex + 2, rowIndex + 2),
                getCase(matrix, colIndex + 3, rowIndex + 3),
                getCase(matrix, colIndex + 4, rowIndex + 4),
                getCase(matrix, colIndex + 5, rowIndex + 5),
            ]
            
            if (checkSequence(diagonal)) return true;
        }
    }
    return false;
}