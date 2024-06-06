import { useState } from "react";
import { addTokenToCol } from "../utils/matrix";

type ColumnProps = {
    index: number;
    matrix: Array<Array<string|null>>;
}

const Column = ({index, matrix}: ColumnProps) => {
    const [internalMatrix, setInternalMatrix] = useState<Array<Array<string|null>>>(matrix);

    const isFull = internalMatrix[index].every(cell => cell !== null);

    const handleClick = () => {
        if (isFull) return;
        addTokenToCol(index + 1, 'red', internalMatrix);
        setInternalMatrix([...internalMatrix]);
    }

    return (
        <div className="column" data-index={index} onClick={handleClick}>
            { internalMatrix[index].map((cell, index) => (
                <div className={`cell cell-${cell}`} data-index={index} key={index}>
                    { cell }
                </div>
            )) }
        </div>
    )
}

export default Column;