export default function GameStatus(props) {
    return (
        <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Fim de jogo
            </p>

            <h2 className={`text-3xl font-bold uppercase tracking-wider ${
                props.isDraw
                    ? "text-white/80"
                    : props.winner === "X"
                        ? "text-player-x drop-shadow-[0_0_10px_var(--color-player-x)]"
                        : "text-player-o drop-shadow-[0_0_10px_var(--color-player-o)]"
            }`}>
                {props.isDraw
                    ? "Empate!"
                    : `Jogador ${props.winner} venceu!`}
            </h2>

            <p className="text-sm text-white/50">
                {props.isDraw
                    ? "Ninguém levou essa rodada."
                    : "Parabéns pela vitória!"}
            </p>
        </div>
    );
}
