import { getEmptyMatrix } from "../utils/matrix";
import Board from "./Board";
import Player from "./Player";

const Game = () => {
    const matrix = getEmptyMatrix();

    return (
        <>
            <Player color="rouge" />
            <Board matrix={matrix} />
            <Player color="jaune" />
        </>
    )
}

export default Game;