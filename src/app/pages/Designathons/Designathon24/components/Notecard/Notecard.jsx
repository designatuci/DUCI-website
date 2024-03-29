import cn from "./Notecard.module.scss";

import { useRef } from "react";
import useNotecardLines from "./useNotecardLines";

const Notecard = ({ children }) => {
	const textRef = useRef(null);

	const { lines, notecardLineTop, notecardLineHeight } =
		useNotecardLines(textRef);

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