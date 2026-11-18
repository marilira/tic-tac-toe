export default function GameStatus(props) {
    return (
        <div>
            <p>FIM DE JOGO</p>
            <h2>
                {props.isDraw
                    ? "DEU EMPATE!"
                    : `JOGADOR ${props.winner} VENCEU!`}
            </h2>
        </div>
    )
}