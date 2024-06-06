import Column from "./Column";

type BoardProps = {
    matrix: Array<Array<string | null>>;
}

const Board = ({ matrix }: BoardProps) => {
    return (
        <div className="board">
            {matrix.map((_, index) => (
                <Column key={index} index={index} matrix={matrix} />
            ))}
        </div>
    )
}

export default Board;