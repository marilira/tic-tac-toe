export default function Square(props) {
    let border = ""

    if (props.index >= 3)
        border += " border-t"
    if (props.index % 3 !== 0)
        border += " border-l"

    return (
        <button
            onClick={() => props.onClick(props.index)}
            className={`
        aspect-square
        w-[28vw]
        max-w-28
        ${border}
        border-board-grid
        text-3xl
        font-bold
        transition-all
        duration-300
        hover:bg-violet-950/40
        ${props.value === "X"
                    ? "text-player-x drop-shadow-[0_0_8px_var(--color-player-x)]"
                    : "text-player-o drop-shadow-[0_0_8px_var(--color-player-o)]"
                }
        cursor-pointer
    `}
        >
            {props.value}
        </button>
    )
}