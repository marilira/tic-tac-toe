export default function Square(props) {
    let border = ""

    if (props.index >= 3)
        border += " border-t"
    if (props.index % 3 !== 0)
        border += " border-l"

    return (
        <button onClick={() => props.onClick(props.index)} className={`
            aspect-square
            w-24 
            ${border} 
            border-violet-400/70 
            text-3xl 
            font-bold 
            transition-all 
            duration-300 
            hover:bg-violet-950/40 
            ${props.value === "X" ? "text-purple-400 drop-shadow-[0_0_8px_#C084FC]" 
                : "text-indigo-400 drop-shadow-[0_0_8px_#818CF8]"} 
            cursor-pointer
        `}>
            {props.value}
        </button>
    )
}