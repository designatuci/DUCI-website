function Square({ s, fill, children }) {
    return (
        <svg
            width={s}
            height={s}
            viewBox={`${-s / 2} ${-s / 2} ${s} ${s}`}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x={-s / 2} y={-s / 2} width={s} height={s} rx={15} />
            {children}
        </svg>
    );
}

export default Square;
