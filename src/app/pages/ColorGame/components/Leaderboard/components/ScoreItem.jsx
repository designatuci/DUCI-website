import { memo, useEffect, useState } from "react";

import { ColorDisplay } from "./ColorDisplay";
import cn from "./ScoreItem.module.scss";

export const ScoreItem = memo(function ScoreItem({ report }) {
	const [isShort, setIsShort] = useState(window.innerWidth < 900);

	useEffect(() => {
		const onResize = () => {
			setIsShort(window.innerWidth < 900);
		};
		window.addEventListener("resize", onResize);

		return () => window.removeEventListener("resize", onResize);
	}, []);

	return (
		<div className={cn.container}>
			<div className={cn.percent}>
				{report.similarityPercentage.toFixed(2)}%
			</div>
			<ColorDisplay
				label="actual"
				color={"#" + report.actual}
				isShort={isShort}
			/>
			<ColorDisplay
				label="guess"
				color={"#" + report.guess}
				isShort={isShort}
			/>
			<div className={cn.date}>
				{new Date(report.timestamp).toLocaleString("en-US", {
					day: "numeric",
					month: "numeric",
					year: "2-digit",

					hour: "numeric",
					minute: "numeric",
				})}
			</div>
		</div>
	);
});
