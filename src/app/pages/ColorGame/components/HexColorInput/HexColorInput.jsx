import { createRef, memo, useEffect, useMemo, useState } from "react";
import clsx from "clsx";

import { generateReport } from "./generateReport";
import cn from "./HexColorInput.module.scss";
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
	const [showErrorMessage, setErrorMessage] = useState(false);
	const [input] = useState(() => Array.from({ length: 6 }, createRef));

	const guessIsValid = useMemo(() => guess.join("").length === 6, [guess]);

	useEffect(() => {
		if (showErrorMessage) setTimeout(() => setErrorMessage(false), 2500);
	}, [showErrorMessage]);

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

	const handleInput = (index) => (event) => {
		const userKeyInput = event.nativeEvent.data.toUpperCase();

		if (!DIGITS.includes(userKeyInput)) return setErrorMessage(true);

		setGuess((prev) => {
			const next = [...prev];
			next[index] = userKeyInput;
			return next;
		});

		if (index > 4) return;
		focusEndOfInput(input[index + 1].current);
	};

	const handleChange = (index) => (event) => {
		if (event.keyCode === 229) {
			// really strange use case where chrome on android doesn't allow this method of input
			return;
		}
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
				if (index > 4) return;
				focusEndOfInput(input[index + 1].current);
				return;

			default:
				// handle actual text input with the oninput handler
				return;
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
						onInput={handleInput(index)}
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
			<div className={clsx(cn.error, showErrorMessage && cn.visible)}>
				Only 0-9 and A-F are valid hex values.
			</div>
		</form>
	);
});
