type PlayerProps = {
    color: string;
}

const Player = ({color}: PlayerProps) => {
    return (
        <div className={`player player-${color}`}>
            <h3>Joueur {color}</h3>
        </div>
    )
}

export default Player;