import cn from "./Notecard.module.scss";

import { useRef } from "react";
import useNotecardLines from "./useNotecardLines";
import clsx from "clsx";

import close_icon from "../../assets/close_icon.svg";

const Notecard = ({ children, modalCard, lineAdjustment, toggleProfile }) => {
	const notecardRef = useRef(null);
	const textRef = useRef(null);

	const { lines, notecardLineTop, notecardLineHeight } = useNotecardLines(
		notecardRef,
		textRef,
	);

	return (
		<div
			className={clsx(cn.noteCard, modalCard && cn.modalCard)}
			ref={notecardRef}
		>
			{toggleProfile ? (
				<button className={cn.close_button} onClick={toggleProfile}>
					<img
						src={close_icon}
						alt="x icon to close notecard modal"
					/>
				</button>
			) : null}

			<div className={cn.noteCardHeader} />

			<div className={cn.text} ref={textRef}>
				{children}
			</div>

			<div className={cn.lines}>
				{/* The number of lines, determined by line height and height of total text */}
				{[
					...Array(Math.max(lines - (lineAdjustment ?? 0), 1)).keys(),
				].map((index) => (
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
