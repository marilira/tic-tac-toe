export default function CurrentPlayer(props) {
    return (
        <div className={`text-center ${props.player === "O" ? "rotate-180 md:rotate-0" : ""}`}>
            <p className={`text-sm uppercase tracking-widest text-violet-300`}>
                Vez do jogador
            </p>

            <h2 className={`text-2xl font-bold ${props.player === "X" ? "text-purple-400" : "text-indigo-400"}`}>
                {props.player}
            </h2>
        </div>
    )
}