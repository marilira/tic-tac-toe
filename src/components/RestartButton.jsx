export default function RestartButton(props) {
    return (
        <button
            onClick={props.onRestart}
            className={`
                px-8
                py-3
                rounded-lg
                border
                font-semibold
                uppercase
                tracking-widest
                transition-all
                duration-300
                active:scale-95
                cursor-pointer

                ${props.winner === "X"
                    ? `
                        border-player-x
                        text-player-x
                        bg-player-x-bg
                        shadow-[0_0_10px_var(--color-player-x)]
                        hover:bg-player-x
                        hover:text-white
                        hover:shadow-[0_0_20px_var(--color-player-x)]
                    `
                    : props.winner === "O"
                        ? `
                            border-player-o
                            text-player-o
                            bg-player-o-bg
                            shadow-[0_0_10px_var(--color-player-o)]
                            hover:bg-player-o
                            hover:text-white
                            hover:shadow-[0_0_20px_var(--color-player-o)]
                        `
                        : `
                            border-draw
                            text-draw
                            bg-draw-bg
                            shadow-[0_0_10px_var(--color-draw)]
                            hover:bg-draw
                            hover:text-gray-900
                            hover:shadow-[0_0_20px_var(--color-draw)]
                        `
                }
            `}
        >
            Jogar novamente
        </button>
    );
}

