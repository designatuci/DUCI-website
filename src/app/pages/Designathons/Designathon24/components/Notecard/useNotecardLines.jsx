import { useState, useEffect, useCallback } from "react";

const LINE_BREAKPOINTS = {
	XL: 48,
	LG: 40,
	SM: 32,
};

const SMALL_SCREEN = 640;
const TOP_MARGIN = 128;
const TOP_MARGIN_SM = 96;

function useNotecardLines(textRef) {
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
		lines: 0,
		notecardLineHeight: 0,
		notecardLineTop: 0,
	});

	const handleResize = useCallback(() => {
		let newHeight = 0;
		let newWidth = 0;

		if (textRef.current) {
			newHeight = textRef.current.clientHeight;
		}

		newWidth = window.innerWidth;

		/* Distance between notecard (blue) lines */
		const notecardLineHeight =
			newWidth >= 1280
				? LINE_BREAKPOINTS.XL
				: newWidth >= 640
					? LINE_BREAKPOINTS.LG
					: LINE_BREAKPOINTS.SM;

		const numLines = Math.floor(newHeight / notecardLineHeight) - 1;
		const lines = numLines > 0 ? numLines : 1;

		/* Distance from top border of card */
		const notecardLineTop =
			newWidth >= SMALL_SCREEN ? TOP_MARGIN : TOP_MARGIN_SM;

		setDimensions({
			width: newWidth,
			height: newHeight,
			lines,
			notecardLineHeight,
			notecardLineTop,
		});
	}, [textRef]);

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	return dimensions;
}

export default useNotecardLines;
