import Circle from "./Circle";
import Square from "./Square";

function HouseIcon({ r, square, bg, scale, opacity, children }) {
    return square ? (
        <Square s={2 * r} fill={bg}>
            {children}
        </Square>
    ) : (
        <Circle r={r} scale={r / scale} fill={bg} opacity={opacity}>
            {children}
        </Circle>
    );
}

export default HouseIcon;
