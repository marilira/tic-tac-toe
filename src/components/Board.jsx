import Square from "./Square";

export default function Board(props) {
    return (
        <div className="grid grid-cols-3">
            {
                props.board.map((value, index) => {
                    return (
                        <Square value={value} index={index} key={index} onClick={props.onSquareClick} />
                    )
                })
            }
        </div>

    )
};
