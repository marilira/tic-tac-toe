export default function GameStatus(props) {
    return (
        <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
                Fim de jogo
            </p>

            <h2 className={`text-3xl font-bold uppercase tracking-wider ${
                props.isDraw
                    ? "text-violet-300 drop-shadow-[0_0_10px_#C084FC]"
                    : props.winner === "X"
                        ? "text-purple-400 drop-shadow-[0_0_10px_#C084FC]"
                        : "text-indigo-400 drop-shadow-[0_0_10px_#818CF8]"
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
