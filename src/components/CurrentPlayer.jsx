export default function CurrentPlayer(props) {
    return (
        <div className={`text-center ${props.player === "O" ? "rotate-180 md:rotate-0" : ""}`}>
            <p className="text-sm uppercase tracking-widest text-violet-300">
                Vez do jogador
            </p>

            <h2 className={`text-2xl font-bold ${props.player === "X"
                    ? "text-player-x drop-shadow-[0_0_8px_var(--color-player-x)]"
                    : "text-player-o drop-shadow-[0_0_8px_var(--color-player-o)]"
                }`}>
                {props.player}
            </h2>
        </div>
    )
}