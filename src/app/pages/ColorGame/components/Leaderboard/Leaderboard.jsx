import clsx from "clsx";
import { memo, useEffect, useRef, useState } from "react";
import cn from "./Leaderboard.module.scss";
import Auto from "react-animate-height";

import { Text } from "app/components";
import { ScoreItem } from "./components/ScoreItem";

const PADDING = 40;
const HIGHSCORE_LOCALSTORAGE_KEY = "@duci/color-game-highscore";

export const Leaderboard = memo(function Leaderboard({ report }) {
	const [highscores, setHighScore] = useState(() =>
		JSON.parse(localStorage.getItem(HIGHSCORE_LOCALSTORAGE_KEY) ?? "[]")
	);
	const contentRef = useRef(null);
	const [height, setHeight] = useState("auto");

	useEffect(() => {
		if (!report) return;

		setHighScore((prev) => {
			const next = [...prev, report]
				.sort((a, b) => b.similarityPercentage - a.similarityPercentage)
				.splice(0, 15);

			localStorage.setItem(
				HIGHSCORE_LOCALSTORAGE_KEY,
				JSON.stringify(next)
			);

			return next;
		});
	}, [report]);

	useEffect(() => {
		const element = contentRef.current;

		const resizeObserver = new ResizeObserver(() => {
			setHeight(element.clientHeight + PADDING);
		});

		resizeObserver.observe(element);
		return () => resizeObserver.disconnect();
	}, []);

	return (
		<Auto
			duration={500}
			height={height}
			className={clsx(cn.container, "slim")}
		>
			<div ref={contentRef}>
				<Text color="blue" className={clsx(cn.title, "bold")} size="L">
					High Scores
				</Text>
				<div className={cn.list}>
					{!highscores.length && (
						<div className={cn.empty}>
							No previous scores to show.
						</div>
					)}
					{highscores.map((score) => (
						<ScoreItem key={score.timestamp} report={score} />
					))}
				</div>
			</div>
		</Auto>
	);
});
