const RANGE_PER_PIXEL_COLOR = 255;
const TOTAL_RANGE_PER_PIXEL = RANGE_PER_PIXEL_COLOR * 3;

export const generateReport = (actualHexCode, guessHexCode) => {
	const actualRGBValues = [
		Number("0x" + actualHexCode.slice(0, 2).join("")),
		Number("0x" + actualHexCode.slice(2, 4).join("")),
		Number("0x" + actualHexCode.slice(4, 6).join("")),
	];
	const guessRGBValues = [
		Number("0x" + guessHexCode.slice(0, 2).join("")),
		Number("0x" + guessHexCode.slice(2, 4).join("")),
		Number("0x" + guessHexCode.slice(4, 6).join("")),
	];

	const percentageDifference = [
		actualRGBValues[0] - guessRGBValues[0],
		actualRGBValues[1] - guessRGBValues[1],
		actualRGBValues[2] - guessRGBValues[2],
	];
	const similarityPercentage =
		100 -
		(percentageDifference.reduce((acc, val) => acc + Math.abs(val), 0) /
			TOTAL_RANGE_PER_PIXEL) *
			100;

	return {
		actual: actualHexCode.join(""),
		guess: guessHexCode.join(""),
		similarityPercentage,
		timestamp: new Date().getTime(),
		percentageDifference,
	};
};
