import cn from "./Notecard.module.scss";

import { useRef, useState, useEffect } from "react";

const LINE_BREAKPOINTS = {
	XL: 48,
	LG: 40,
	SM: 32,
};

const Notecard = ({ children }) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [lines, setLines] = useState(0);
	const [notecardLineHeight, setNotecardLineHeight] = useState(0);
	const [notecardLineTop, setNotecardLineTop] = useState(0);

	const textRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			if (textRef.current) {
				const height = textRef.current.clientHeight;
				setHeight(height);
			}

			if (window) {
				const width = window.innerWidth;
				setWidth(width);
			}

			const numLines = Math.floor(height / notecardLineHeight) - 1;
			setLines(numLines > 0 ? numLines : 1);

			/* Distance between notecard (blue) lines */
			setNotecardLineHeight(
				width >= 1280
					? LINE_BREAKPOINTS.XL
					: width >= 640
						? LINE_BREAKPOINTS.LG
						: LINE_BREAKPOINTS.SM,
			);

			/* Distance from top border of card */
			setNotecardLineTop(width >= 640 ? 128 : 96);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [height, notecardLineHeight, width]);

	return (
		<div className={cn.noteCard}>
			<div className={cn.noteCardHeader} />

			<div className={cn.text} ref={textRef}>
				{children}
			</div>

			<div className={cn.lines}>
				{/* The number of lines, determined by line height and height of total text */}
				{[...Array(lines).keys()].map((index) => (
					<div
						className={cn.line}
						style={{
							/* The distance between lines, accounting for the top of the card */
							top: `calc(${notecardLineTop}px + ${index * notecardLineHeight}px)`,
						}}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Notecard;
