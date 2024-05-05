import { createRef, memo, useMemo, useState } from "react";
import cn from "./HexColorInput.module.scss";
import clsx from "clsx";
import { generateReport } from "./generateReport";
import REFRESH_ICON from "./refresh.png";

export const DIGITS = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
];

const EMPTY_GUESS = ["", "", "", "", "", ""];

const focusEndOfInput = (inputEl) => {
	inputEl.focus();
	inputEl.setSelectionRange(-1, -1);
};

export const HexColorInput = memo(function HexColorInput({
	color,
	setReport,
	resetColor,
}) {
	const [guess, setGuess] = useState(EMPTY_GUESS);
	const [input] = useState(() => Array.from({ length: 6 }, createRef));

	const guessIsValid = useMemo(() => guess.join("").length === 6, [guess]);

	const ignoreEvent = (event) => {
		event.preventDefault();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!guessIsValid) return;

		setReport(generateReport(color, guess));
	};

	const refresh = () => {
		resetColor();
		setGuess(EMPTY_GUESS);
		setReport();
		focusEndOfInput(input[0].current);
	};

	const handleChange = (index) => (event) => {
		const userKeyInput = event.key.toUpperCase();

		switch (event.key) {
			case "Backspace":
				if (index > 0 && !guess[index].length) {
					focusEndOfInput(input[index - 1].current);
				}
				setGuess((prev) => {
					const next = [...prev];
					next[!guess[index].length ? index - 1 : index] = "";
					return next;
				});
				return;

			case "ArrowLeft":
				if (index === 0) return;
				focusEndOfInput(input[index - 1].current);
				return;

			case "ArrowRight":
				if (index > 5) return;
				focusEndOfInput(input[index + 1].current);
				return;

			default:
				if (!DIGITS.includes(userKeyInput)) return;

				setGuess((prev) => {
					const next = [...prev];
					next[index] = userKeyInput;
					return next;
				});

				if (index > 4) return;
				focusEndOfInput(input[index + 1].current);
		}
	};
	return (
		<form className={cn.container} onSubmit={handleSubmit}>
			<div className={cn.input}>
				<input
					className={cn.underline}
					type="text"
					contentEditable={false}
					value="#"
					readOnly
				/>
				{guess.map((digit, index) => (
					<input
						key={index}
						ref={input[index]}
						type="text"
						value={digit}
						onChange={ignoreEvent}
						onKeyDown={handleChange(index)}
						placeholder="F"
					/>
				))}
			</div>
			<div className={cn.actions}>
				<button
					className={clsx(cn.submit, guessIsValid && cn.allowed)}
					type="submit"
				>
					Submit
				</button>
				<button
					className={clsx(cn.retry)}
					type="button"
					onClick={refresh}
				>
					<img alt="refresh" src={REFRESH_ICON} />
				</button>
			</div>
		</form>
	);
});
