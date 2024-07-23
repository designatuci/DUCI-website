import React from "react";

function Circle({ r, scale, fill, opacity, children }) {
    return (
        <svg
            width={2 * r}
            height={2 * r}
            viewBox={`${-r} ${-r} ${2 * r} ${2 * r}`}
            fill={fill}
            opacity={opacity ?? 1}
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle r={r} />
            <g transform={`scale(${scale ?? 1})`}>{children}</g>
        </svg>
    );
}

export default Circle;
